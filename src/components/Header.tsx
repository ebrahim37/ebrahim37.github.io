import { type ParentComponent, type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Section } from '~/components/Section.tsx';
import { CoverImage } from '~/components/CoverImage.tsx';

const Div: ParentComponent<{ classArg: string }> = props => (
	<div class={props.classArg}>{props.children}</div>
);

const H1: ParentComponent<{ classArg: string }> = props => (
	<h1 class={props.classArg}>{props.children}</h1>
);

const H2: ParentComponent<{ classArg: string }> = props => (
	<h2 class={props.classArg}>{props.children}</h2>
);

const EMAIL = 'sayhi@ebra.dev';

export const Header: Component<{
	isResume: boolean,
}> = props => {
	const NameComponent = () => props.isResume ? H1 : Div;
	const RoleComponent = () => props.isResume ? H2 : Div;

	return (
		<Section comp='header' cnArg='border-b-[0.5px]'>
			<div class='p-4 md:p-8 shrink-0 flex flex-col gap-4'>
				<div class='gap-3 shrink-0 items-center flex'>
					<div class='relative w-11 h-11 flex items-center justify-center flex-nowrap rounded-full overflow-hidden contain-strict shrink-0'>
						<CoverImage
							alt='A picture of me, Ebrahim Haghshenas'
							src='/images/me.avif'
							imgClass='absolute inset-0 box-border m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover'
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
						<p class='leading-normal shrink-0'>
							Pragmatic engineer with a bias for simple, reliable frontends and small, type-safe backends. Final-year Computing (Software Design) at Queen's with strong fundamentals (3.80 GPA) and hands-on industry experience in LLM evaluation and full-stack development. Built products like a real-estate crowdfunding app and a provably-fair casino game.
						</p>
						<div class='gap-4 flex flex-wrap justify-start text-[#475569] dark:text-[#cbd5e1] shrink-0 text-[0.875rem] items-center '>
							<div class='gap-1 shrink-0 items-center flex'>
								<span class='mask-[url(/icons/map-pin.svg)] w-3.5 h-3.5 contain-strict inline-block mask-center mask-no-repeat mask-cover bg-current shrink-0' />
								<span>Toronto, ON</span>
							</div>
							<a href={`mailto:${EMAIL}`} class='gap-1 shrink-0 items-center flex'>
								<span class='mask-[url(/icons/email.svg)] w-3.5 h-3.5 contain-strict inline-block mask-center mask-no-repeat mask-cover bg-current shrink-0' />
								<span>{EMAIL}</span>
							</a>
						</div>
					</>
				)}
			</div>
		</Section>
	);
};