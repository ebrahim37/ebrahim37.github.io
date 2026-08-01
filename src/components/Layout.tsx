import type { ParentComponent } from 'solid-js';

import { useTheme } from '~/utils/useTheme.ts';
import { NavLink } from '~/components/NavLink.tsx';
import { NavButton } from '~/components/NavButton.tsx';

export const Layout: ParentComponent = props => {
	const [theme, toggleTheme] = useTheme();

	return (
		<>
			<a class='skip-link' href='#main-content'>Skip to content</a>
			<header class='site-header'>
				<div class='site-header-inner'>
					<nav aria-label='Primary navigation' class='flex items-center gap-1'>
						<NavLink href='/'>blog</NavLink>
						<NavLink href='/projects'>projects</NavLink>
						<NavLink href='/about'>about</NavLink>
					</nav>
					<div class='flex items-center'>
						<NavButton
							onClick={toggleTheme}
							cnArg={theme() === 'light' ? 'mask-[url(/icons/moon.svg)]' : 'mask-[url(/icons/sun.svg)]'}
							ariaLabel={`Switch to ${theme() === 'light' ? 'dark' : 'light'} theme`}
						/>
						<NavButton
							href='https://github.com/ebrahim37'
							cnArg='mask-[url(/icons/github.svg)]'
							ariaLabel='Ebrahim on GitHub (opens in a new tab)'
						/>
						<NavButton
							href='https://www.linkedin.com/in/ebrahim-hagh'
							cnArg='mask-[url(/icons/linkedin.svg)]'
							ariaLabel='Ebrahim on LinkedIn (opens in a new tab)'
						/>
					</div>
				</div>
			</header>
			<main id='main-content' tabindex='-1'>
				{props.children}
			</main>
		</>
	);
};
