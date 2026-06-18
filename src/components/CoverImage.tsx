import type { Component } from 'solid-js';

export const CoverImage: Component<{
	alt: string,
	src: string,
	imgClass: string,
	fetchpriority?: 'high' | 'low' | 'auto',
}> = props => (
	<span class='absolute inset-0 block overflow-hidden'>
		<img
			alt={props.alt}
			src={props.src}
			fetchpriority={props.fetchpriority}
			class={props.imgClass}
		/>
	</span>
);