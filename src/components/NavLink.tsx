import { type ParentComponent, createMemo } from 'solid-js';
import { usePageContext } from 'vike-solid/usePageContext';

import { cn } from '~/utils/cn.ts';

export const NavLink: ParentComponent<{ href: string }> = props => {
	const pageContext = usePageContext();
	const isActive = createMemo(() => {
		const pathname = pageContext.urlPathname.replace(/\/$/, '') || '/';
		return !pageContext.is404 && pathname === props.href;
	});

	return (
		<a href={props.href} class={cn('header-link', isActive() && 'header-link-active')}>
			{props.children}
		</a>
	);
};
