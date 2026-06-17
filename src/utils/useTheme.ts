import { type Accessor, createSignal, onMount } from 'solid-js';

type ThemeType = 'light' | 'dark';

declare global {
	interface Window {
		startTheme?: ThemeType,
	}
}

export const useTheme = (): [Accessor<ThemeType>, () => void] => {
	const [theme, setTheme] = createSignal<ThemeType>('light');

	onMount(() => {
		setTheme(window.startTheme ?? 'light');
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