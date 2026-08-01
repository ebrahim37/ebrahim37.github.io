import type { ParentComponent } from 'solid-js';

import { useTheme } from '~/utils/useTheme.ts';
import { NavLink } from '~/components/NavLink.tsx';
import { NavButton } from '~/components/NavButton.tsx';
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon } from '~/components/Icons.tsx';

export const Layout: ParentComponent = props => {
	const [theme, toggleTheme] = useTheme();

	return (
		<>
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
							icon={theme() === 'light' ? MoonIcon : SunIcon}
							ariaLabel={`Switch to ${theme() === 'light' ? 'dark' : 'light'} theme`}
						/>
						<NavButton
							href='https://github.com/ebrahim37'
							icon={GitHubIcon}
							ariaLabel='Ebrahim on GitHub (opens in a new tab)'
						/>
						<NavButton
							href='https://www.linkedin.com/in/ebrahim-hagh'
							icon={LinkedInIcon}
							ariaLabel='Ebrahim on LinkedIn (opens in a new tab)'
						/>
					</div>
				</div>
			</header>
			{/* enable card hover/active feedback on iOS Safari */}
			<main on:touchstart={{ handleEvent: () => {}, passive: true }}>
				{props.children}
			</main>
		</>
	);
};
