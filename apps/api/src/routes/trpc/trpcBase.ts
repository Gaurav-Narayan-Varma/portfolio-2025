import { initTRPC } from "@trpc/server";
import { Context } from "vm";
import { ZodError } from "zod";

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
