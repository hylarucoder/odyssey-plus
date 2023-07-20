import {A} from "solid-start";

export const VFooter = () => {
    return (
        <div class="m-5 border-t border-solid border-zinc-100 p-5  dark:border-zinc-900 sm:mt-12">
            <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div class="flex space-x-2 text-sm font-medium text-zinc-800 dark:text-zinc-300">
                    <A href="/" class="cursor-pointer">
                        Home
                    </A>
                    <A href="/about" class="cursor-pointer">
                        About
                    </A>
                    <A href="/projects" class="cursor-pointer">
                        Projects
                    </A>
                    <A href="/speaking" class="cursor-pointer">
                        Youtube
                    </A>
                    <A href="/uses" class="cursor-pointer">
                        Uses
                    </A>
                </div>
                <p class="text-sm text-zinc-400">© 2023 HylaruCoder. All rights reserved.</p>
            </div>
        </div>
    )
}

