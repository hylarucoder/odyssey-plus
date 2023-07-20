import {Component, JSXElement} from "solid-js"

export const VH1: Component<{ children: JSXElement }> = (
    {
        children
    }) => {
    return (
        <h1 class="whitespace-pre-wrap text-left text-3xl font-bold text-zinc-700 dark:text-gray-200 sm:text-5xl">
            {children}
        </h1>
    )
}
