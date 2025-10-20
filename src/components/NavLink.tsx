import type { ParentComponent } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

import { cn } from '~/utils/cn';

export const NavLink: ParentComponent<{
	dontHighlightLinks?: boolean,
	href: string,
}> = props => {
	const location = useLocation();
	const correctedPathname = (location.pathname !== '/' && location.pathname.slice(-1) === '/') ?
		location.pathname.slice(0, -1) : location.pathname;
	const isHrefMatch = props.href === correctedPathname;
	const highlightBlog = props.href !== '/resume' && correctedPathname !== '/resume';
	const shouldHighlight = !props.dontHighlightLinks && (isHrefMatch || highlightBlog);
	return (
		<A href={props.href} class={cn(
			'py-1 px-4 text-inherit font-semibold grow shrink-0 min-w-[56px] rounded-full',
			shouldHighlight && 'cursor-default bg-[#1e293b] text-white dark:bg-white dark:text-black',
			!shouldHighlight && 'hover:cursor-pointer hover:bg-[#cbd5e1] hover:text-[#0f172a] dark:hover:bg-[#1e293b] dark:hover:text-[#e2e8f0]',
			!shouldHighlight && 'active:bg-[#94a3b8] active:text-[#0f172a] dark:active:bg-[#0f172a] dark:active:text-[#f1f5f9]',
		)}>
			<span class='flex text-[0.875rem] items-center h-full'>
				{props.children}
			</span>
		</A>
	);
};
