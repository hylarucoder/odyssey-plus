import {createSignal} from 'solid-js';
import {LocaleKey} from "~/constants";

export const VLanguageSwitch = () => {
    const [locale, setLocale] = createSignal(LocaleKey.ZH_CN); // 假设初始值为 LocaleKey.ZH_CN
    const [colorMode, setColorMode] = createSignal("dark"); // 假设初始值为 "dark"

    return (
        <button
            color="gray"
            variant="ghost"
            aria-label="Theme"
            onClick={() => {
                if (locale() === LocaleKey.ZH_CN) {
                    setLocale(LocaleKey.EN_US);
                } else {
                    setLocale(LocaleKey.ZH_CN);
                }
            }}
        >
            {locale() === LocaleKey.ZH_CN ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                    <g
                        fill="none"
                        stroke={colorMode() === "dark" ? "#AAAAAA" : "#555555"}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                    >
                        <rect width="36" height="36" x="6" y="6" rx="3"/>
                        <path
                            d="M13 31V17h8m-8 7h7.5M13 31h7.5m5.5 0V19m0 12v-6.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5V31"/>
                    </g>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                    <g
                        fill="none"
                        stroke={colorMode() === "dark" ? "#AAAAAA" : "#555555"}
                        stroke-linecap="round"
                        stroke-width="4"
                    >
                        <rect width="36" height="36" x="6" y="6" stroke-linejoin="round" rx="3"/>
                        <path stroke-linejoin="round" d="M14 18h20v10H14z"/>
                        <path d="M24 14v21"/>
                    </g>
                </svg>
            )}
        </button>
    );
};

