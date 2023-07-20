import { createSignal, onCleanup } from "solid-js"
import { For } from "solid-js/web"
import { VH1 } from "~/components/VH1"
import { VSubtitle } from "~/components/VSubtitle"
import { VArticleCard } from "~/components/VArticleCard"

const t = (key: string) => key

const MyComponent = () => {
  const [articles, setArticles] = createSignal([])
  const [pending, setPending] = createSignal(true)
  const [error, setError] = createSignal(false)

  onCleanup(async () => {
    try {
      // const { articles: articlesData } = await useArticles();
      setArticles([])
      setPending(false)
    } catch (error) {
      setError(true)
      setPending(false)
    }
  })

  return (
    <div class="min-h-screen w-full px-5 pb-5 sm:px-40 sm:py-10">
      <div class="whitespace-wrap sm:max-w-3xl">
        <VH1>{t("Articles.Title")}</VH1>
        <VSubtitle>{t("Articles.Subtitle")}</VSubtitle>
      </div>
      <div>
        {pending() || error() ? (
          <span>Loading...</span>
        ) : (
          <div>
            <div class="mt-5 max-w-5xl sm:mt-10">
              <div class="border-solid border-zinc-100">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <For each={articles()}>
                    {(article, index) => (
                      <VArticleCard key={index()} article={article} />
                    )}
                  </For>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyComponent
