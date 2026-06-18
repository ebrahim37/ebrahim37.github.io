import type { ParentComponent, Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Section } from '~/components/Section.tsx';
import { CoverImage } from '~/components/CoverImage.tsx';

const H1: ParentComponent<{ classArg: string }> = props => (
	<h1 class={props.classArg}>{props.children}</h1>
);

const H2: ParentComponent<{ classArg: string }> = props => (
	<h2 class={props.classArg}>{props.children}</h2>
);

const Div: ParentComponent<{ classArg: string }> = props => (
	<div class={props.classArg}>{props.children}</div>
);

const EMAIL = 'sayhi@ebra.dev';

export const Header: Component<{ isResume: boolean }> = props => {
	const NameComponent = () => props.isResume ? H1 : Div;
	const RoleComponent = () => props.isResume ? H2 : Div;

	return (
		<Section comp='header' cnArg='border-b-[0.5px]'>
			<div class='flex flex-col gap-4 p-4 md:p-8'>
				<div class='flex items-center gap-3'>
					<div class='relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full contain-strict'>
						<CoverImage
							alt='A picture of me, Ebrahim Haghshenas'
							src='/images/me.avif'
							fetchpriority='high'
							imgClass='absolute inset-0 m-auto size-0 min-h-full min-w-full max-h-full max-w-full object-cover'
						/>
					</div>
					<div>
						<Dynamic component={NameComponent()} classArg='text-[1.125rem] text-[#1e293b] dark:text-white tracking-tight leading-[1.5] font-semibold'>
							Ebrahim Haghshenas
						</Dynamic>
						<Dynamic component={RoleComponent()} classArg='leading-[1.25] font-normal text-[1.125rem] tracking-tight'>
							Software Engineer
						</Dynamic>
					</div>
				</div>
				{props.isResume && (
					<>
						<p class='leading-normal'>
							Pragmatic engineer with a bias for simple, reliable frontends and small, type-safe backends. Final-year Computing (Software Design) at Queen's with strong fundamentals (3.80 GPA) and hands-on industry experience in LLM evaluation and full-stack development. Built products like a real-estate crowdfunding app and a provably-fair casino game.
						</p>
						<div class='flex flex-wrap items-center gap-4 text-[0.875rem] text-[#475569] dark:text-[#cbd5e1]'>
							<div class='flex shrink-0 items-center gap-1'>
								<span class='size-3.5 shrink-0 bg-current mask-[url(/icons/map-pin.svg)] mask-cover mask-center mask-no-repeat contain-strict' />
								<span>Toronto, ON</span>
							</div>
							<a href={`mailto:${EMAIL}`} class='flex shrink-0 items-center gap-1'>
								<span class='size-3.5 shrink-0 bg-current mask-[url(/icons/email.svg)] mask-cover mask-center mask-no-repeat contain-strict' />
								<span>{EMAIL}</span>
							</a>
						</div>
					</>
				)}
			</div>
		</Section>
	);
};