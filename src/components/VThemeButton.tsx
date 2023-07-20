import {createSignal} from 'solid-js';

export const VThemeButton = () => {
    const [colorMode, setColorMode] = createSignal("light"); // 假设初始值为 "light"
    const [icon, setIcon] = createSignal("i-mdi-theme-light-dark");

    if (colorMode() === "light") {
        setIcon("i-heroicons-sun-20-solid");
    }
    if (colorMode() === "dark") {
        setIcon("i-heroicons-moon-20-solid");
    }

    return (
        <button
            icon={icon()}
            color="gray"
            variant="ghost"
            aria-label="Theme"
            onClick={() => {
                if (colorMode() === "light") {
                    setColorMode("dark");
                    setIcon("i-heroicons-moon-20-solid");
                } else if (colorMode() === "dark") {
                    setColorMode("system");
                    setIcon("i-mdi-theme-light-dark");
                } else {
                    setColorMode("light");
                    setIcon("i-heroicons-sun-20-solid");
                }
            }}
        />
    );
};

