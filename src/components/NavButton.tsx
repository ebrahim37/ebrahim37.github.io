import type { Component } from 'solid-js';

import { cn } from '~/utils/cn.ts';

const iconClass = 'size-[18px] bg-current mask-cover mask-center mask-no-repeat contain-strict';

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
	const icon = () => <span class={cn(iconClass, props.cnArg)} aria-hidden='true' />;

	return props.href ? (
		<a class='header-icon-button' href={props.href} aria-label={props.ariaLabel} target='_blank' rel='noreferrer'>
			{icon()}
		</a>
	) : (
		<button class='header-icon-button' type='button' onClick={props.onClick} aria-label={props.ariaLabel}>
			{icon()}
		</button>
	);
};
