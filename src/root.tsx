// @refresh reload
import { SessionProvider } from "@solid-auth/base/client"
import { Suspense } from "solid-js"
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start"
import "./root.css"
import { VHeader } from "~/components/VHeader"

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart + AuthJS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <SessionProvider>
            <ErrorBoundary>
              <main class="mx-auto my-0 w-screen max-w-[1200px] bg-white dark:bg-zinc-800">
                <VHeader />
                <div class="pt-15 mt-28 w-full bg-white pb-5 dark:bg-zinc-800 sm:mt-0 sm:py-5 sm:pb-4 sm:pt-5">
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </div>
              </main>
            </ErrorBoundary>
          </SessionProvider>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
