import type { ParentComponent } from 'solid-js';

import { useTheme } from '~/utils/useTheme.ts';
import { Section } from '~/components/Section.tsx';
import { NavLink } from '~/components/NavLink.tsx';
import { NavButton } from '~/components/NavButton.tsx';

export const Layout: ParentComponent = props => {
	const [theme, toggleTheme] = useTheme();

	return (
		<div class='min-h-dvh grid grid-rows-[min-content_min-content_auto]'>
			<Section comp='section' cnArg='sticky inset-[0_auto_auto] z-50 flex items-center justify-between border-b-[0.5px] bg-white px-4 py-2 wrap-break-word dark:bg-black'>
				<nav class='text-[0.875rem] flex flex-nowrap scroll-p-9 gap-2 overflow-y-hidden overflow-x-auto items-stretch grow-0 shrink'>
					<NavLink href='/'>
						Blog
					</NavLink>
					<NavLink href='/resume'>
						Resume
					</NavLink>
				</nav>
				<div class='flex shrink items-center gap-4'>
					<NavButton
						onClick={toggleTheme}
						cnArg={theme() === 'light' ? 'mask-[url(/icons/sun.svg)]'
							: 'mask-[url(/icons/moon.svg)]'
						}
						ariaLabel='toggle light/dark theme'
					/>
					<NavButton
						href='https://github.com/beans42'
						cnArg='mask-[url(/icons/github.svg)]'
						ariaLabel='link to my GitHub profile'
					/>
					<NavButton
						href='https://www.linkedin.com/in/ebrahim-hagh'
						cnArg='mask-[url(/icons/linkedin.svg)]'
						ariaLabel='link to my LinkedIn profile'
					/>
				</div>
			</Section>
			{props.children}
		</div>
	);
};