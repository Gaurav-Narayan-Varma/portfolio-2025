import * as trpcExpress from "@trpc/server/adapters/express";
import cors, { CorsOptions } from "cors";
import { trpcRouter } from "./trpcBase.js";

export const corsOptions: CorsOptions = {
  origin: process.env.API_PORTFOLIO_WEB_URL,
  credentials: true,
  allowedHeaders: ["Content-Type", "Cookie"],
};
export const appRouter = trpcRouter({});

export type AppRouter = typeof appRouter;

/**
 * Used by express to handle /trpc routes
 */
export const trpcExpressRouter = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: ({ req, res }) => ({ req, res }),
  middleware: cors(corsOptions),
});
