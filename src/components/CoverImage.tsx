import type { Component } from 'solid-js';

export const CoverImage: Component<{
	alt: string,
	src: string,
	imgClass: string,
	fetchpriority?: 'high' | 'low' | 'auto',
	wrapperClass?: string,
}> = props => (
	<span class={props.wrapperClass ?? 'box-border block overflow-hidden w-[initial] h-[initial] bg-none absolute inset-0'}>
		<img
			alt={props.alt}
			src={props.src}
			fetchpriority={props.fetchpriority}
			class={props.imgClass}
		/>
	</span>
);