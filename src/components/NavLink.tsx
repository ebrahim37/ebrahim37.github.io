import { type ParentComponent, createMemo } from 'solid-js';
import { usePageContext } from 'vike-solid/usePageContext';

import { cn } from '~/utils/cn.ts';

export const NavLink: ParentComponent<{ href: string }> = props => {
	const pageContext = usePageContext();

	// remove trailing '/' from pathname
	const correctedPathname = createMemo(() => {
		const pathname = pageContext.urlPathname;
		return (pathname !== '/' && pathname.slice(-1) === '/') ?
			pathname.slice(0, -1) : pathname;
	});
	const shouldHighlight = createMemo(() => {
		const pathname = correctedPathname();
		const isHrefMatch = props.href === pathname;
		const highlightBlog = props.href !== '/resume' && pathname !== '/resume';
		return !pageContext.is404 && (isHrefMatch || highlightBlog);
	});

	return (
		<a href={props.href} class={cn(
			'min-w-14 grow shrink-0 rounded-full py-1 px-[1em] text-inherit font-semibold',
			shouldHighlight() && 'cursor-default text-white bg-[#1e293b] dark:text-black dark:bg-white',
			!shouldHighlight() && 'hover:text-[#0f172a] hover:bg-[#cbd5e1] dark:hover:text-[#e2e8f0] dark:hover:bg-[#1e293b] active:text-[#0f172a] active:bg-[#94a3b8] dark:active:text-[#f1f5f9] dark:active:bg-[#0f172a]',
		)}>
			<span class='flex text-[0.875rem] items-center h-full'>
				{props.children}
			</span>
		</a>
	);
};