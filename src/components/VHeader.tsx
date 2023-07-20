import {createSignal, For} from "solid-js";
import {A, useLocation} from "solid-start";
import {VLanguageSwitch} from "~/components/VLanguageSwitch";
import {VThemeButton} from "~/components/VThemeButton";

export const VHeader = () => {
    const [navShow, toggleNav] = createSignal(false);

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Posts",
            path: "/posts",
        },
        {
            name: "Projects",
            path: "/projects",
        },
        {
            name: "Uses",
            path: "/uses",
        },
        {
            name: "About",
            path: "/about",
        },
    ];

    const location = useLocation()

    return (
        <>
            <div class="z-20 hidden w-[1200px] flex-col sm:flex">
                <div class="sticky  top-0 z-30 flex justify-between px-8 pt-3 ">
                    <div class="mx-20 px-12">
                        <A href="/" class="cursor-pointer">
                            <img
                                src="/avatar.jpg"
                                class="h-16 w-16 overflow-clip rounded-full bg-zinc-100 object-cover align-middle"
                            />
                        </A>
                    </div>
                    <div class="flex flex-grow items-center justify-center">
                        <div
                            class="flex h-10 items-center justify-center space-x-3 rounded-lg bg-white px-3 font-sans text-sm font-medium shadow backdrop-blur dark:bg-zinc-700">
                            <For each={navLinks}>
                                {link => (
                                    <A
                                        class={`${link.path === location.pathname ? "text-green-500" : ""}`}
                                        href={link.path}
                                    >
                                        {link.name}
                                    </A>
                                )}
                            </For>
                        </div>
                    </div>
                    <div class="mx-20 flex items-center justify-between space-x-4 px-12">
                        <VLanguageSwitch/>
                        <VThemeButton/>
                    </div>
                </div>
            </div>
            <nav
                class="fixed top-0 z-10 block w-full border-b border-gray-200 bg-white text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 sm:hidden">
                <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3">
                    <div class="flex justify-start">
                        <button
                            class="z-20 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                            onClick={() => {
                                toggleNav(!navShow());
                            }}
                        >
                            <span class="sr-only">Open main menu</span>
                            <span class="i-mdi-menu h-10 w-10"></span>
                        </button>
                        <span class="ml-3 self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              HylaruCoder's Castle
            </span>
                    </div>
                    <div class="flex items-center justify-between space-x-4 py-3">
                        <VLanguageSwitch/>
                        <VThemeButton/>
                    </div>
                </div>
                <div
                    class={{
                        "m-0": true,
                        "z-10": true,
                    }}
                >
                    <div
                        class={{
                            "z-10 w-full md:block md:w-auto": true,
                            block: navShow(),
                            hidden: !navShow(),
                        }}
                    >
                        <div
                            class="mt-0 flex flex-col space-y-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-5 font-medium dark:border-gray-700 dark:bg-zinc-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                            {/*<For each={navLinks}>*/}
                            {/*    {link => (*/}
                            {/*        <A*/}
                            {/*            key={link.path}*/}
                            {/*            class={`${link.path === location.pathname ? "text-green-500" : "text-zinc-300"}`}*/}
                            {/*            onClick={() => {*/}
                            {/*                toggleNav(!navShow());*/}
                            {/*            }}*/}
                            {/*            to={link.path}*/}
                            {/*        >*/}
                            {/*            {link.name}*/}
                            {/*        </A>*/}
                            {/*    )}*/}
                            {/*</For>*/}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

