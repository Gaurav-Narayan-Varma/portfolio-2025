import { initTRPC } from "@trpc/server";
import { parse, serialize } from "cookie";
import type { IncomingMessage, ServerResponse } from "http";
import { Context } from "vm";
import { ZodError } from "zod";

const MAX_COOKIE_AGE = 60 * 60 * 24 * 365;

enum Cookie {
  SessionId = "session_id",
  LastLoggedInAs = "last_logged_in_as",
}

/**
 * Custom TRPC error formatter for zod errors
 *
 * This is a custom error formatter that formats the error message so that
 * the error message can be accessed in the front end the same way that
 * a regular error message is.
 */
export const t = initTRPC.context<Context>().create({
  errorFormatter(opts) {
    const { shape, error } = opts;

    // Log all errors to console
    console.error("tRPC Error:", {
      code: error.code,
      path: shape.data.path,
      message: error.message,
      cause: error.cause,
    });

    if (error.code === "BAD_REQUEST" && error.cause instanceof ZodError) {
      /**
       * Get the first error message from the ZodError
       */
      const firstError = error.cause.errors[0];
      return {
        ...shape,
        message: firstError?.message || "Validation error",
        data: {
          ...shape.data,
          zodError: error.cause.flatten(),
        },
      };
    }

    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: null,
      },
    };
  },
});

export const trpcRouter = t.router;

export const publicProcedure = t.procedure
  /**
   * NOP middleware -- just for typing
   */
  .use((opts) => {
    const { ctx } = opts;
    const { req, res } = ctx as { req: IncomingMessage; res: ServerResponse };

    return opts.next({
      ctx: {
        req,
        res,
      },
    });
  })
  /**
   * Cookie helpers
   */
  .use((opts) => {
    const { req, res } = opts.ctx;

    const getCookieHeader = () => {
      const cookieHeader =
        req.headers instanceof Headers
          ? req.headers.get("cookie")
          : req.headers.cookie;

      if (!cookieHeader) {
        return;
      }

      return cookieHeader;
    };

    const getCookies = () => {
      const cookieHeader = getCookieHeader();

      if (!cookieHeader) {
        return {};
      }

      return parse(cookieHeader.toString());
    };

    const getCookie = (name: Cookie) => {
      const cookieHeader = getCookieHeader();

      if (!cookieHeader) {
        return;
      }

      const cookies = parse(cookieHeader.toString());

      return cookies[name];
    };

    const deleteCookie = (name: Cookie) => {
      res.appendHeader(
        "Set-Cookie",
        serialize(name, "", {
          secure: process.env.NODE_ENV === "production",
          domain: process.env.API_COOKIE_DOMAIN,
          path: "/",
          maxAge: 0,
        })
      );
    };

    return opts.next({
      ctx: {
        getCookieHeader,
        getCookies,
        getCookie,
        deleteCookie,
      },
    });
  });
