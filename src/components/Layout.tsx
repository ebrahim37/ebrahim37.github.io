import type { ParentComponent } from 'solid-js';

import { useTheme } from '~/utils/useTheme.ts';
import { NavLink } from '~/components/NavLink.tsx';
import { GitHubIcon, LinkedInIcon, MoonIcon, RssIcon, SunIcon } from '~/components/Icons.tsx';

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
						<button
							class='header-icon-button'
							type='button'
							onClick={toggleTheme}
							aria-label={`Switch to ${theme() === 'light' ? 'dark' : 'light'} theme`}
						>
							{theme() === 'light'
								? <MoonIcon class='size-[18px] contain-strict' />
								: <SunIcon class='size-[18px] contain-strict' />}
						</button>
						<a
							class='header-icon-button'
							href='/rss.xml'
							aria-label='RSS feed (opens in a new tab)'
							target='_blank'
							rel='noreferrer'
						>
							<RssIcon class='size-[18px] contain-strict' />
						</a>
						<a
							class='header-icon-button'
							href='https://github.com/ebrahim37'
							aria-label='Ebrahim on GitHub (opens in a new tab)'
							target='_blank'
							rel='noreferrer'
						>
							<GitHubIcon class='size-[18px] contain-strict' />
						</a>
						<a
							class='header-icon-button'
							href='https://www.linkedin.com/in/ebrahim-hagh'
							aria-label='Ebrahim on LinkedIn (opens in a new tab)'
							target='_blank'
							rel='noreferrer'
						>
							<LinkedInIcon class='size-[18px] contain-strict' />
						</a>
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
