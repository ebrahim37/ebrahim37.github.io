import { type ParentComponent, createMemo } from 'solid-js';
import { usePageContext } from 'vike-solid/usePageContext';

import { cn } from '~/utils/cn';

export const NavLink: ParentComponent<{
	href: string,
}> = props => {
	const pageContext = usePageContext();
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
			'py-1 px-4 text-inherit font-semibold grow shrink-0 min-w-14 rounded-full',
			shouldHighlight() && 'cursor-default bg-[#1e293b] text-white dark:bg-white dark:text-black',
			!shouldHighlight() && 'hover:cursor-pointer hover:bg-[#cbd5e1] hover:text-[#0f172a] dark:hover:bg-[#1e293b] dark:hover:text-[#e2e8f0]',
			!shouldHighlight() && 'active:bg-[#94a3b8] active:text-[#0f172a] dark:active:bg-[#0f172a] dark:active:text-[#f1f5f9]',
		)}>
			<span class='flex text-[0.875rem] items-center h-full'>
				{props.children}
			</span>
		</a>
	);
};