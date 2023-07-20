import { siteConfig, TProject } from "~/config/site"
import { VH1 } from "~/components/VH1"
import { VSubtitle } from "~/components/VSubtitle"
import { A } from "solid-start"

const VProjectCard = (props: { project: TProject }) => (
  <A
    href={props.project.link}
    target="_blank"
    class="max-h-[250] cursor-pointer overflow-hidden rounded-2xl p-8 shadow hover:shadow-xl dark:bg-zinc-700"
  >
    <div class="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-400">
      <img src={props.project.logo} class="h-8 w-8 overflow-clip align-middle" />
    </div>
    <h2 class="mt-6 font-semibold text-zinc-800">
      <span class="z-10 dark:text-zinc-400">{props.project.title}</span>
    </h2>
    <p class="z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-500">{props.project.description}</p>
    <p class="z-10 mt-6 flex text-sm font-medium text-zinc-400">{props.project.source}</p>
  </A>
)

export default () => (
  <div>
    <div class="w-full px-5 py-5 sm:px-40 sm:py-10">
      <div class="sm:max-w-3xl">
        <VH1>A collection of my most exciting and innovative projects.</VH1>
        <VSubtitle>
          I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Some of
          them are open-source, so if you see something that piques your interest, check out the code and contribute
          if you have ideas for how it can be improved.
        </VSubtitle>
      </div>
      <div class="mt-5 grid grid-cols-1 gap-x-4 gap-y-4 sm:mt-10 sm:grid-cols-2">
        {siteConfig.projects.map((item) => (
          <VProjectCard key={item.title} project={item} />
        ))}
      </div>
    </div>
  </div>
)
