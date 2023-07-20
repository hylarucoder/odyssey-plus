import { getSession } from "@solid-auth/base"
import { signIn } from "@solid-auth/base/client"
import { createSignal, onCleanup, Show } from "solid-js"
import { A, Navigate, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server"
import { authOptions } from "~/server/auth"

// import { useArticles } from '~/composables/useArticles';
import { siteConfig } from "~/config/site"
import { VH1 } from "~/components/VH1"
import { VSubtitle } from "~/components/VSubtitle"

const VPhotoCard = (props) => {
  const [visible, setVisible] = createSignal(false)
  return (
    <div
      class="relative bottom-0 left-0 h-[300px] w-[120px] transform overflow-hidden rounded-2xl bg-zinc-100 object-cover align-middle transition-transform duration-200 hover:scale-110 dark:bg-gray-800 sm:w-[220px]">
      {!visible() && <div class="h-full w-full" />}
      <img
        src={props.src}
        format="webp"
        loading="lazy"
        onLoad={() => setVisible(true)}
        class={{
          "absolute inset-0 h-full w-full rounded-2xl transition-opacity duration-500 hover:opacity-100": true,
          "opacity-0": !visible(),
          "opacity-1": visible(),
        }}
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}

// export default defineComponent({
//   async setup() {
//     const { t } = useTrans()
//     const { articles, pending, error } = await useArticles()
//     const router = useRouter()
//
//     return () => (
//     )
//   },
// })


export const routeData = () => {
  return createServerData$(async (_, event) => {
    const session = await getSession(event.request, authOptions)
    return { session: session }
  })
}

const t = (s) => s

export default function Home() {
  const session = useRouteData<typeof routeData>()
  const [redirectIn, setRedirectIn] = createSignal(3)

  const int = setInterval(() => {
    setRedirectIn((prev) => prev - 1)
  }, 1000)

  onCleanup(() => clearInterval(int))
  const images = [
    "https://images.unsplash.com/photo-1687813043106-2ff1331ee96b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1681316151115-b9c60f39d628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1659864751962-42bcfe5eb0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1567416592215-fb3c07cfb7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1686468117025-25e6fa62e826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxibzhqUUtUYUUwWXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1681490443339-bc2c76fcdbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1686121279184-e5f2c67bdd63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0OXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  ]

  return (
    <div>
      <h1>Home</h1>
      <Show
        when={session()?.session}
        fallback={
          <>
            <span>You are not signed in.</span>
            <button onClick={() => signIn("discord")}>Sign In</button>
          </>
        }
      >
        <span>Redirecting to protected page in {redirectIn()} seconds...</span>
        <Show when={redirectIn() <= 0}>
          <Navigate href="/protected" />
        </Show>
      </Show>

      <div class="w-full">
        <div class="w-full px-5 pb-5 sm:px-40 sm:py-10">
          <div class="sm:max-w-3xl">
            <VH1>{t("Home.Title")}</VH1>
            <VSubtitle>{t("Home.Subtitle")}</VSubtitle>
            <div class="mt-6 flex gap-6">
              {siteConfig.socialLinks.map((l) => (
                <A key={l.platform} href={l.url} class="-m-1 cursor-pointer p-1">
                  <span class={[l.icon, "transform transition-all duration-300 ease-in-out hover:scale-150"]} />
                </A>
              ))}
            </div>
          </div>
        </div>
        <div class="no-scrollbar flex items-center justify-center gap-8 overflow-x-scroll py-4">
          {images.slice(1, 6).map((image) => (
            <VPhotoCard key={image} src={image} />
          ))}
        </div>
        <div class="mx-5 mt-4 flex flex-col pb-10 sm:mx-32 sm:mt-14 sm:flex-row sm:space-x-10">
          {/*<div class="space-y-4">*/}
          {/*  {pending.value || error.value ? (*/}
          {/*    <>*/}
          {/*      <VSkeletonArticleCard />*/}
          {/*      <VSkeletonArticleCard />*/}
          {/*      <VSkeletonArticleCard />*/}
          {/*    </>*/}
          {/*  ) : (*/}
          {/*    (articles.value.posts || []).map((article, index) => <VArticleCard key={index} article={article} />)*/}
          {/*  )}*/}
          {/*</div>*/}
          <div class="mt-0">
            <div
              class="mt-5 rounded-2xl  border border-solid border-zinc-100 py-6 dark:border-zinc-800 dark:bg-zinc-700 sm:mt-0">
              <h2 class="flex px-6 text-sm font-bold text-zinc-900  hover:bg-gray-100 dark:text-zinc-400">
                <span class="i-mdi-basket-outline h-5 w-5" />
                <span class="ml-3">Work</span>
              </h2>
              <ol class="mt-4">
                {siteConfig.workExperience.map((work) => (
                  <li
                    key={work.companyName}
                    class="flex items-center space-x-1 px-6 py-2 text-zinc-800 hover:bg-zinc-400"
                  >
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border-gray-200 shadow">
                      <img src={work.imageUrl} class="rounded-full" />
                    </div>
                    <div class="flex w-full flex-1 flex-grow flex-wrap gap-1 pl-2">
                      <div
                        class="w-full text-sm font-bold text-zinc-900 dark:text-zinc-400">{work.companyName}</div>
                      <div class="flex w-full justify-between ">
                        <div class="text-[0.81rem] text-zinc-500 dark:text-zinc-500">{work.jobTitle}</div>
                        <div class="flex font-mono text-[0.81rem] text-zinc-500 dark:text-zinc-500">
                          <div>{work.startDate}</div>
                          <span>—</span>
                          <div>{work.endDate}</div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div class="flex w-full items-center">
                <button
                  class="mx-auto mt-6 inline-flex h-10 w-96 cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-center text-sm font-medium text-zinc-900 hover:bg-gray-200 dark:bg-zinc-600 dark:text-zinc-400"
                  onClick={() => {
                    router.push("/about")
                  }}
                >
                  About Me
                  <span class="i-mdi-arrow-right text-xl text-gray-500" />
                </button>
              </div>
            </div>
            <form
              action="/thank-you"
              class="mt-5 rounded-2xl border border-solid border-zinc-100 p-6 text-zinc-800 hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-700"
            >
              <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-400">
                <span class="i-mdi-email-edit-outline h-5 w-5" />
                <span class="ml-3">Stay up to date</span>
              </h2>
              <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new, and unsubscribe at any time.
              </p>
              <div class="mt-6 flex w-full">
                <div class="w-full">
                  <input
                    type="email"
                    placeholder="Email address"
                    class="h-11 w-72 flex-grow cursor-text rounded-md border border-solid border-zinc-900 bg-white px-3 py-1.5 text-sm"
                  />
                </div>
                <button
                  class="ml-4 flex h-10 w-14 cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-center text-sm font-semibold text-zinc-100 dark:text-zinc-200">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
