import type { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { IconProps } from '~/components/Icons.tsx';

export const NavButton: Component<{
	icon: Component<IconProps>,
	ariaLabel: string,
} & ({
	href: string,
	onClick?: never,
} | {
	href?: never,
	onClick: () => void,
})> = props => {
	const icon = () => <Dynamic component={props.icon} class='size-[18px] contain-strict' />;

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
