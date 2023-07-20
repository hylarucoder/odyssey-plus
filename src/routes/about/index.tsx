import { createSignal, onMount, onCleanup } from "solid-js"
import { siteConfig } from "~/config/site"
import { VH1 } from "~/components/VH1"

const VIconStack = (props: { icon: string, name: string }) => {
  return (
    <div
      class="border-1 inline-flex items-center rounded-lg border border-solid border-gray-200 bg-white px-3 py-1 text-[0.81rem] font-bold dark:border-zinc-600 dark:bg-zinc-600">
      <div class="h-5 w-5">
        <span class={["w-5", "h-5", props.icon]} />
      </div>
      <span class="ml-1 text-gray-800 dark:text-zinc-300">{props.name}</span>
    </div>
  )
}

const Home = () => {

  const skills = {
    programmingLanguages: [
      {
        name: "Python ✨️",
        iconClass: "i-vscode-icons-file-type-python",
      },
      {
        name: "TypeScript ✨️",
        iconClass: "i-vscode-icons-file-type-typescript",
      },
      {
        name: "Go",
        iconClass: "i-vscode-icons-file-type-go",
      },
    ],
    frontEndFrameworks: [
      {
        name: "Vue ✨️",
        iconClass: "i-vscode-icons-file-type-vue",
      },
      {
        name: "React",
        iconClass: "i-mdi-react text-blue-500",
      },
    ],
    backEndTechnologies: [
      {
        name: "Django ✨️ / Flask / FastAPI",
        iconClass: "i-vscode-icons-file-type-django",
      },
      {
        name: "Docker",
        iconClass: "i-vscode-icons-file-type-docker",
      },
    ],
    games: [
      {
        name: "PlayStation 5",
        iconClass: "i-mdi-sony-playstation text-blue-500",
      },
      {
        name: "Nintendo Switch",
        iconClass: "i-mdi-nintendo-switch text-red-500",
      },
    ],
  }

  return (

    <div class="w-full px-5 pb-5 sm:px-40 sm:pt-10">
      <div class="flex w-full flex-col sm:flex-row">
        <div class="mt-4 pr-5">
          <VH1>
            I'm hylarucoder <br /> do some creative work here.
          </VH1>
          <div class="mt-6 whitespace-pre-wrap text-zinc-500 dark:text-zinc-400 sm:text-xl">
            <p>
              I am a full-stack Indie Hacker, focused on integrating my technology skills with entrepreneurial spirit
              to create valuable products and services to solve people's real problems. As a full-stack developer, I
              have various skills including front-end, back-end, AIGC, and UI/UX design.
            </p>
            <p class="mt-7">
              I have learned programming on my own, using independent thinking and practical spirit to climb the peak
              of technology. In the past few years, I have independently developed some projects, some of which were
              successful and some failed. However, every failure is an opportunity for me to grow and understand that
              entrepreneurship must have real innovation and useful value to survive in the market.
            </p>
            <p class="mt-7">
              I believe that successful products require a solid technical foundation and excellent user experience.
              Therefore, I pay attention to writing code that is concise, readable, expandable, and also focuses on
              details and design to provide excellent user experience.
            </p>
            <p class="mt-7">
              As a full-stack Indie Hacker, I love to explore different areas and technologies to create new things
              and solve people's real problems. I look forward to collaborating with like-minded people to build great
              products and services that make people's lives better and more convenient.
            </p>
          </div>
        </div>

        <div class="min-w-[300px] space-y-2 px-0 pt-8 sm:pt-0">
          <img
            src="/avatar.jpg"
            class="h-96 w-96 overflow-clip rounded-2xl bg-zinc-100 object-cover align-middle shadow"
          />
          <h2 class="text-xl font-bold text-gray-700 dark:text-zinc-300">Contact Me</h2>
          <div class="grid grid-cols-2 gap-2 rounded-lg">
            {siteConfig.socialLinks.map((socialLink) => (
              <a
                href={socialLink.url}
                class="flex cursor-pointer items-center text-sm font-medium text-zinc-800 dark:text-zinc-300"
              >
                <span class={socialLink.icon} />
                <span class="ml-4">{socialLink.platform}</span>
              </a>
            ))}
          </div>

          <div class="flex flex-col rounded-lg py-5">
            <h2 class="mb-5 text-xl font-bold text-gray-700 dark:text-zinc-300">Skill</h2>
            <div class="flex flex-col space-y-2">
              <div class="flex flex-wrap space-x-3 ">
                {skills.programmingLanguages.map((item) => (
                  <VIconStack icon={item.iconClass} name={item.name} />
                ))}
              </div>
              <div class="flex flex-wrap space-x-3">
                {skills.frontEndFrameworks.map((item) => (
                  <VIconStack icon={item.iconClass} name={item.name} />
                ))}
              </div>
              <div class="flex flex-wrap space-x-3">
                {skills.backEndTechnologies.map((item) => (
                  <VIconStack icon={item.iconClass} name={item.name} />
                ))}
              </div>
              <div class="flex flex-wrap space-x-3">
                {skills.games.map((item) => (
                  <VIconStack icon={item.iconClass} name={item.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
