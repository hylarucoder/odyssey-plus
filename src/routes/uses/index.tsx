import { VH1 } from "~/components/VH1"
import { VSubtitle } from "~/components/VSubtitle"

interface Item {
  name: string
  description: string
}

interface Section {
  title: string
  items: Item[]
}

export default () => {
  const sections: Section[] = [
    {
      title: "Workstation",
      items: [
        {
          name: "16” MacBook Pro, M2 Max, 64GB RAM (2023)",
          description:
            "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
        },
        {
          name: "DELL/BENQ",
          description: "I prefer working with three screens together.",
        },
        {
          name: "Herman Miller",
          description: "I received it from my former boss.",
        },
      ],
    },

    {
      title: "Development tools",
      items: [
        {
          name: "JetBrains IDEs: PyCharm/WebStorm/DataGrip",
          description:
            "JetBrains IDEs are a popular choice among developers because they offer a wide range of features and tools that make coding easier and more efficient.",
        },
        {
          name: "AI Tools: Copilot/ChatGPT/OpenCat",
          description: "AI has greatly increased my development productivity.",
        },
        {
          name: "Editor - VSCode/NeoVim",
          description:
            "Sometimes you may need a lightweight editor to perform quick edits or to work with files that don't require the full range of features available in an IDE.",
        },
        {
          name: "iTerm2/Warp + oh-my-zsh",
          description: "iTerm2 + oh-my-zsh Make terminal great again.",
        },
        {
          name: "RayCast",
          description: "Raycast is an app that lets you control your Mac with a few keystrokes.",
        },
      ],
    },

    {
      title: "Productivity",
      items: [
        {
          name: "Notion / Obsidian",
          description:
            "Notion is a productivity tool that allows users to create and manage tasks, notes, and databases all in one place. It is highly regarded due to its flexibility, versatility, and user-friendliness.",
        },
      ],
    },
  ]

  return (
    <div>

      <div class="w-full px-5 pb-5 sm:px-40 sm:py-10">
        <div class="sm:max-w-3xl">
          <VH1>Software I use, gadgets I love, and other things I recommend.</VH1>
          <VSubtitle>
            I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into
            thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite
            stuff.
          </VSubtitle>
        </div>
        <div class="mt-2 max-w-2xl">
          <div>
            {sections.map((section: Section) => (
              <div key={section.title} class="mt-10 border-solid border-zinc-100 sm:pl-0">
                <div class="grid items-baseline">
                  <h2 class="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{section.title}</h2>
                  <div>
                    <ul>
                      {section.items.map((item: Item) => (
                        <li key={item.name} class="mt-6 flex flex-col items-start">
                          <h3 class="text-zinc-600 dark:text-zinc-300">{item.name}</h3>
                          <p class="z-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
