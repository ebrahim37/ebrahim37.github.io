import { createSignal, onMount, Show } from 'solid-js';

import { Sun, Moon } from '~/components/Icons.tsx';
import { cn } from '~/utils/cn.ts';

export const ThemeChanger = () => {
	const [theme, setTheme] = createSignal('');

	onMount(() => {
		// @ts-expect-error
		setTheme(window.startTheme ?? ''); //in script tag from ../root.jsx
	});

	const toggleColorMode = () => {
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

	return (
		<div
			onClick={toggleColorMode}
			class={cn(
				'w-9 h-9 p-2 rounded-[8px_16px_8px_8px] bg-slate-200 dark:bg-stone-900 hover:opacity-70 cursor-pointer fill-black dark:fill-white',
				theme() === '' && 'hidden'
			)}
		>
			<Show
				when={theme() === 'light'}
				fallback={<Moon />}
			>
				<Sun />
			</Show>
		</div>
	);
};