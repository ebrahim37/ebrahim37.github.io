import { For } from 'solid-js';
import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data';
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
				<div class='relative h-56 w-full shrink-0'>
					<span class='box-border block overflow-hidden w-[initial] h-[initial] bg-none absolute top-0 left-0 right-0 bottom-0 '>
						<img
							alt='A view of downtown Toronto from the CN Tower.'
							src='/images/CN.avif'
							fetchpriority='high'
							class='absolute top-0 left-0 right-0 bottom-0 box-border m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover'
						/>
					</span>
				</div>
				<div class='p-4 md:p-8 gap-4 shrink-0 flex flex-col'>
					<div class='flex flex-col items-start shrink-0'>
						<h1 class='text-[1.875rem] text-[#1e293b] dark:text-white tracking-tight leading-normal font-semibold'>
							Ebrahim Haghshenas
						</h1>
						<h2 class='text-[1.5rem] tracking-tight leading-tight font-normal'>
							Software Engineer
						</h2>
					</div>
					<p class='leading-normal shrink-0'>
						UI-leaning full-stack dev focused on fast DX and clean UX.
						Final-year CompSci @ Queen&apos;s.
						I build with TypeScript, React/Solid, Tailwind, Drizzle, and Bun; ship on Linux.
						Recently: LLM eval/annotation and full-stack product work.
					</p>
					<div class='text-[#475569] dark:text-[#cbd5e1] text-[0.875rem] gap-1 shrink-0 items-center flex'>
						<span class='mask-[url(/icons/map-pin.svg)] w-3.5 h-3.5 contain-strict inline-block mask-center mask-no-repeat mask-cover bg-current shrink-0' />
						<span>Toronto, ON</span>
					</div>
				</div>
			</Section>
			<Section comp='div' cnArg='min-h-full flex flex-col'>
				<For each={data.posts}>{(post, i) =>
					<HomePagePost
						post={post}
						topBorder={false}
						bottomBorder={i() === (data.posts.length - 1) ? false : true}
					/>
				}</For>
			</Section>
		</>
	);
}