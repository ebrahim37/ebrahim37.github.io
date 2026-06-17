import type { ParentComponent, Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { cn } from '~/utils/cn';

const outerClass = cn(
	'text-[1rem] p-1 text-inherit cursor-default inline-flex items-center justify-center rounded-full shrink-0',
	'hover:bg-[#cbd5e1] hover:text-[#0f172a] dark:hover:bg-[#1e293b] dark:hover:text-[#e2e8f0]',
	'active:bg-[#94a3b8] active:text-[#0f172a] dark:active:bg-[#0f172a] dark:active:text-[#f1f5f9]',
);

const Button: ParentComponent<{
	onClick: () => void,
	ariaLabel: string,
}> = props => (
	<button 
		onClick={props.onClick}
		class={outerClass}
		aria-label={props.ariaLabel}
	>
		{props.children}
	</button>
);

const Link: ParentComponent<{
	href: string,
	ariaLabel: string,
}> = props => (
	<a 
		href={props.href}
		class={outerClass}
		aria-label={props.ariaLabel}
	>
		{props.children}
	</a>
);

const innerClass = 'w-4 h-4 contain-strict inline-block mask-center mask-no-repeat mask-cover bg-current';

export const NavButton: Component<{
	href?: string,
	onClick?: () => void,
	cnArg: string,
	ariaLabel: string,
}> = props => (
	<Dynamic
		component={props.href ? Link : Button}
		href={props.href!}
		onClick={props.onClick!}
		ariaLabel={props.ariaLabel}
	>
		<span class={cn(innerClass, props.cnArg)} />
	</Dynamic>
);