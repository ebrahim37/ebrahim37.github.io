import type { Component } from 'solid-js';

import { cn } from '~/utils/cn.ts';

const outerClass = 'inline-flex shrink-0 items-center justify-center rounded-full p-1 text-[1rem] text-inherit cursor-default hover:text-[#0f172a] hover:bg-[#cbd5e1] dark:hover:text-[#e2e8f0] dark:hover:bg-[#1e293b] active:text-[#0f172a] active:bg-[#94a3b8] dark:active:text-[#f1f5f9] dark:active:bg-[#0f172a]';

const innerClass = 'size-4 bg-current mask-cover mask-center mask-no-repeat contain-strict';

export const NavButton: Component<{
	cnArg: string,
	ariaLabel: string,
} & ({
	href: string,
	onClick?: never,
} | {
	href?: never,
	onClick: () => void,
})> = props => {
	const icon = () => <span class={cn(innerClass, props.cnArg)} />;

	return props.href ? (
		<a
			href={props.href}
			class={outerClass}
			aria-label={props.ariaLabel}
		>
			{icon()}
		</a>
	) : (
		<button
			onClick={props.onClick}
			class={outerClass}
			aria-label={props.ariaLabel}
		>
			{icon()}
		</button>
	);
};