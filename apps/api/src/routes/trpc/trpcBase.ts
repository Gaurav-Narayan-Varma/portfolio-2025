import { initTRPC } from "@trpc/server";
import { SerializeOptions, parse, serialize } from "cookie";
import type { IncomingMessage, ServerResponse } from "http";
import { Context } from "vm";
import { ZodError } from "zod";

// function logoutUser(ctx: any) {
//   ctx.deleteCookie(Cookie.SessionId);
//   ctx.deleteCookie(Cookie.LastLoggedInAs);
// }

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

type SetCookieOptions = SerializeOptions & {
  /**
   * Sets the Max-Age value to 1 year
   */
  persistent?: boolean;
};

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

    const setCookie = (
      name: Cookie,
      value: string,
      options?: SetCookieOptions
    ) => {
      const { persistent, ...defaultOptions } = options ?? {};

      res.appendHeader(
        "Set-Cookie",
        serialize(name, value, {
          secure: process.env.NODE_ENV === "production",
          domain: process.env.API_COOKIE_DOMAIN,
          path: "/",
          ...(persistent ? { maxAge: MAX_COOKIE_AGE } : {}),
          ...defaultOptions,
        })
      );
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
        setCookie,
        deleteCookie,
      },
    });
  });

// export const userProcedure = publicProcedure.use(async (opts) => {
//   const { ctx } = opts;

//   /**
//    * Next.js will sometimes wrap the headers in a Headers object,
//    * so we need to check for that and access the cookie header accordingly.
//    */
//   const cookieHeader = ctx.getCookieHeader();

//   if (!cookieHeader) {
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }

//   const parsedCookie = parse(cookieHeader) as Record<
//     string,
//     string | undefined
//   >;
//   const sessionId = parsedCookie[Cookie.SessionId];

//   if (!sessionId) {
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }

//   const session = await db.session.findUnique({
//     where: {
//       id: sessionId,
//     },
//   });

//   if (!session) {
//     logoutUser(ctx);
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }

//   return opts.next({
//     ctx: {
//       userId: session.userId,
//     },
//   });
// });
