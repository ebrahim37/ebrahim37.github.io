import type { Component } from 'solid-js';

import { cn } from '~/utils/cn';

const outerClass = cn(
	'text-[1rem] p-1 text-inherit cursor-default inline-flex items-center justify-center rounded-full shrink-0',
	'hover:bg-[#cbd5e1] hover:text-[#0f172a] dark:hover:bg-[#1e293b] dark:hover:text-[#e2e8f0]',
	'active:bg-[#94a3b8] active:text-[#0f172a] dark:active:bg-[#0f172a] dark:active:text-[#f1f5f9]',
);

const innerClass = 'w-4 h-4 contain-strict inline-block mask-center mask-no-repeat mask-cover bg-current';

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