import type { Accessor } from 'solid-js';
import { createSignal, onMount } from 'solid-js';

type ThemeType = 'light' | 'dark';

export const useTheme = (): [Accessor<ThemeType>, () => void] => {
	const [theme, setTheme] = createSignal<ThemeType>('light');

	onMount(() => {
		// @ts-expect-error
		setTheme(window.startTheme ?? 'light'); //in script tag from ~/entry-server.tsx
	});

	const toggleTheme = () => {
		if (theme() === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setTheme('light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		}
	};

	return [theme, toggleTheme];
};
