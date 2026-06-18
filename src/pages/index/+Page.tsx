import { For, Show } from 'solid-js';
import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data';
import { CoverImage } from '~/components/CoverImage.tsx';
import { Section } from '~/components/Section.tsx';
import { HomePagePost } from '~/components/HomePagePost.tsx';

export function Page() {
	const data = useData<Data>();
	useConfig()({
		title: 'Ebrahim Haghshenas / Software Engineer / Toronto',
		description: 'Personal website of Ebrahim Haghshenas.',
	});

	return (
		<>
			<Section comp='header' cnArg='border-b-[0.5px] flex flex-col'>
				<div class='relative h-56 w-full'>
					<CoverImage
						alt='A view of downtown Toronto from the CN Tower.'
						src='/images/CN.avif'
						fetchpriority='high'
						imgClass='absolute inset-0 m-auto size-0 min-h-full min-w-full max-h-full max-w-full object-cover'
					/>
				</div>
				<div class='flex flex-col gap-4 p-4 md:p-8'>
					<div class='flex flex-col items-start'>
						<h1 class='text-[1.875rem] text-[#1e293b] dark:text-white tracking-tight leading-normal font-semibold'>
							Ebrahim Haghshenas
						</h1>
						<h2 class='text-[1.5rem] tracking-tight leading-tight font-normal'>
							Software Engineer
						</h2>
					</div>
					<p class='leading-normal'>
						UI-leaning full-stack dev focused on fast DX and clean UX.
						Final-year CompSci @ Queen&apos;s.
						I build with TypeScript, React/Solid, Tailwind, Drizzle, and Bun; ship on Linux.
						Recently: LLM eval/annotation and full-stack product work.
					</p>
					<div class='flex items-center gap-1 text-[0.875rem] text-[#475569] dark:text-[#cbd5e1]'>
						<span class='size-3.5 shrink-0 bg-current mask-[url(/icons/map-pin.svg)] mask-cover mask-center mask-no-repeat contain-strict' />
						<span>Toronto, ON</span>
					</div>
				</div>
			</Section>
			<Section comp='div' cnArg='min-h-full flex flex-col'>
				<For each={data.posts}>{(post, i) =>
					<>
						<HomePagePost post={post} />
						<Show when={i() !== data.posts.length - 1}>
							<div class='w-full h-px bg-[#e2e8f0] dark:bg-[#334155]' />
						</Show>
					</>
				}</For>
			</Section>
		</>
	);
}