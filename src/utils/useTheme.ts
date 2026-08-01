import { type Accessor, createSignal, onMount } from 'solid-js';

type ThemeType = 'light' | 'dark';

declare global {
	interface Window {
		startTheme?: ThemeType,
	}
}

export const useTheme = (): [Accessor<ThemeType>, () => void] => {
	const [theme, setTheme] = createSignal<ThemeType>('light');
	const setBrowserTheme = (nextTheme: ThemeType) => {
		document.documentElement.classList.toggle('dark', nextTheme === 'dark');
		document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
			?.setAttribute('content', nextTheme === 'dark' ? '#000000' : '#ffffff');
	};

	onMount(() => {
		const startTheme = window.startTheme ?? 'light';
		setBrowserTheme(startTheme);
		setTheme(startTheme);
	});

	const toggleTheme = () => {
		const nextTheme = theme() === 'dark' ? 'light' : 'dark';
		setBrowserTheme(nextTheme);
		localStorage.setItem('theme', nextTheme);
		setTheme(nextTheme);
	};

	return [theme, toggleTheme];
};
