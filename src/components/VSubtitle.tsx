import { Component, JSX } from "solid-js"

export const VSubtitle: Component<{
  children: JSX.Element
}> = (props) => (
  <p class="mt-6 whitespace-pre-wrap break-words text-zinc-500 dark:text-zinc-400 sm:text-xl">
    {props.children}
  </p>
)

