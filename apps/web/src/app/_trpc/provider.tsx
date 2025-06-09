"use client";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { trpc } from "./client";

export default function Provider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        /**
         * Instead of retrying again, log the user out and redirect to the home page after UNAUTHORIZED error
         */
        defaultOptions: {
          queries: {
            retry: (failureCount, error: any) => {
              if (error?.data?.code === "UNAUTHORIZED") {
                document.cookie =
                  "session_id=; last_logged_in_as=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                router.push("/");
              }
              return failureCount < 3;
            },
          },
        },
        queryCache: new QueryCache({
          onError: (error: any) => {
            if (error?.data?.code === "UNAUTHORIZED") {
              queryClient.clear();
              router.push("/");
              toast.error(
                "You are not authorized to access this page. Please login."
              );
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (error: any) => {
            if (error?.data?.code === "UNAUTHORIZED") {
              queryClient.clear();
              router.push("/");
              toast.error(
                "You are not authorized to access this page. Please login."
              );
            }
          },
        }),
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `http://localhost:5009/trpc`,
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: "include",
            });
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
