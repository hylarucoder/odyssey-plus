import {Component, JSXElement} from "solid-js"

export const VH2: Component<{ children: JSXElement }> = (
    {
        children
    }) => {
    return (
        <h2>{children}</h2>
    )
}
