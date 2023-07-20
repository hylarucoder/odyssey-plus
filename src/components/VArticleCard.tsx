import { createSignal, onCleanup } from "solid-js"
import { A } from "solid-start"

export type TArticleCard = {
  title: string
  slug: string
  date: string
  category: string
  preview: string
  words: string
}

export const VSkeletonArticleCard = () => {
  return (
    <div class="m-0 h-[250px] max-h-[250px] overflow-clip rounded-2xl p-0 sm:w-[450px]">
      <div class="relative">
        <div class="h-80 w-full rounded-2xl bg-gray-200 object-cover dark:bg-zinc-500 sm:w-[450px]" />
        <div
          class="absolute bottom-0 w-full rounded-b-2xl bg-opacity-60 px-5 py-5 pt-5 text-transparent backdrop-blur-md">
          <div class="animate-pulse bg-gray-200 text-xl font-semibold dark:bg-zinc-500">{"       "}</div>
          <span class="relative z-20 mt-1 flex animate-pulse items-center justify-between bg-gray-200">
            {"       "}
          </span>
        </div>
      </div>
    </div>
  )
}

export const VArticleCard = (props: { article: TArticleCard }) => {
  const { article } = props
  const [hoverRef, setHoverRef] = createSignal<HTMLDivElement | null>(null)
  // const isHovered = useElementHover(hoverRef) // Please define this hook if not yet defined
  const isHovered = () => false // Please define this hook if not yet defined

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
  const randomImage = images[article.title.length % images.length]

  return (
    <div
      ref={setHoverRef}
      class="m-0 flex max-h-[250px] transform overflow-clip rounded-2xl p-0 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      <A class="relative" href={"/posts/" + article.slug}>
        <img src={randomImage} class="h-[250px]  rounded-2xl object-fill sm:w-[550px]" />
        <div
          class={`absolute bottom-0 w-full flex-1 rounded-b-2xl bg-opacity-60 px-5 py-5 pt-5 text-gray-500 backdrop-blur-md ${
            isHovered() ? "hover:bg-opacity-80 hover:text-white" : ""
          } ${isHovered() ? "backdrop-blur-lg" : ""}`}
        >
          <h2 class={`text-xl font-semibold text-white ${isHovered() ? "text-opacity-90" : "text-opacity-70"}`}>
            {article.title}
          </h2>
          <span
            class={`relative z-20 mt-1 flex items-center justify-between text-white ${
              isHovered() ? "text-opacity-90" : "text-opacity-70"
            }`}
          >
            <span class="inline-flex items-center space-x-3">
                <span class="inline-flex items-center space-x-1 text-[12px] font-medium md:text-sm">
                  <span class="i-mdi-calendar text-[12px] font-medium md:text-sm" />
                  <span> {article.date} </span>
                </span>
                <span class="inline-flex items-center space-x-1 text-[12px] font-medium md:text-sm">
                  <span class="i-mdi-book-outline text-[12px] font-medium md:text-sm" />
                  <span>{article.category}</span>
                </span>
              </span>
              <span class="inline-flex items-center space-x-3 text-[12px] font-medium md:text-xs">
                <span class="inline-flex items-center space-x-1">
                  <span class="i-mdi-cursor-default-click-outline text-[12px] font-medium md:text-sm" />
                  <span>{article.words}</span>
                </span>
                <span class="inline-flex items-center space-x-1">
                  <span class="i-mdi-clock-outline text-[12px] font-medium md:text-sm" />
                  <span> {(parseInt(article.words) / 100).toFixed()}min </span>
                </span>
              </span>
          </span>
        </div>
      </A>
    </div>
  )
}

