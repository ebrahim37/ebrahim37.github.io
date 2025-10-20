import { For, Component } from 'solid-js';

import { Header } from '~/components/Header';
import { Section } from '~/components/Section.tsx';
import { Layout } from '~/components/Layout.tsx';
import { cn } from '~/utils/cn';

const LANGUAGES = [
	'C/C++',
	'Java',
	'Python',
	'HTML/CSS/JavaScript',
	'TypeScript',
	'SQL',
	'Bash',
	'Rust',
	'Go',
	'LaTeX',
];

const LIBRARIES = [
	'Node.js',
	'Next.js/React',
	'Express.js',
	'Django',
	'Redux',
	'Tailwind CSS',
	'and more',
];

const RESUME_LINK = 'https://drive.google.com/file/d/1ZqPFToCU4kQDG6dCo4Z0z7QGLY_1xBYG/view';

const PROJECTS = [
	{
		name: 'wealthgate',
		description: 'A real-estate crowdfunding app featuring real-time trading.',
		tags: 'Next.js, Tailwind, Express, JWT, Socket.IO',
		href: 'https://wealthgate.ebra.dev/',
	},
	{
		name: 'orionlotto',
		description: 'Real-time gambling app with crypto deposits and withdrawals.',
		tags: 'SolidJS, Tailwind, Express, JWT, Socket.IO',
		href: 'https://github.com/beans42/orionlotto',
	},
	{
		name: 'xplorit',
		description: 'Real-time geocaching-like game. Made during Turnerhacks 2021 (won 2nd).',
		tags: 'Express, Socket.IO, Ionic Framework',
		href: 'https://github.com/beans42/xplorit',
	},
	{
		name: 'maze-solver',
		description: 'Maze-solving desktop application, ported to web using WASM.',
		tags: 'C++, Dear ImGui, Emscripten, GLFW',
		href: 'https://github.com/beans42/maze-solver',
	},
];

const List: Component<{
	list: string[],
	label: string,
}> = props => {
	return (
		<li class={cn(
			'p-4 xs:py-4 xs:px-8 rounded-2xl bg-[#f1f5f9] dark:bg-[#0f172a] shrink-0',
			'grid grid-cols-1 xs:grid-cols-[120px_auto] gap-2 items-center',
			'text-[#64748b] dark:text-[#94a3b8] leading-[1.5]',
		)}>
			<h3 class='text-[#1e293b] dark:text-white font-medium text-[1rem]'>
				{props.label}
			</h3>
			<ul>
				<For each={props.list}>{(listItem, i) =>
					<li class={cn(
						'inline text-[0.875rem]',
						i() !== (props.list.length - 1) && 'after:content-[\',_\']',
					)}>
						{listItem}
					</li>
				}</For>
			</ul>
		</li>
	);
};

const Project: Component<{
	name: string,
	description: string,
	tags: string,
	href: string,
}> = props => {
	return (
		<a
			href={props.href}
			class={cn(
				'p-4 xs:p-8 rounded-2xl',
				'flex flex-col gap-2',
				'leading-[1.5] text-[#64748b] dark:text-[#94a3b8]',
				'border-[0.5px] border-[#1d4ed8] dark:border-[#60a5fa]',
				'hover:bg-[#f1f5f9] hover:dark:bg-[#0f172a]',
			)}
		>
			<h3 class='font-medium text-[1.125rem] text-[#1e293b] dark:text-white shrink-0'>
				{props.name}
			</h3>
			<p class='shrink-0 text-[0.875rem]'>
				{props.description}
			</p>
			<span class='text-[0.75rem] text-[#1d4ed8] dark:text-[#60a5fa] shrink-0'>
				{props.tags}
			</span>
		</a>
	);
};

export default () => {
	return (
		<Layout>
			<Header isResume />
			<Section comp='div' cnArg='p-4 md:p-8 min-h-full flex flex-col gap-8'>
				<section class='gap-4 shrink-0 flex flex-col'>
					<h2 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white shrink-0'>
						More about me
					</h2>
					<ul class='gap-2 shrink-0 flex flex-col list-none'>
						<List label='Languages' list={LANGUAGES} />
						<List label='Libraries' list={LIBRARIES} />
						<a
							href={RESUME_LINK}
							class={cn(
								'p-4 xs:py-4 xs:px-8 rounded-2xl',
								'flex items-center justify-center',
								'font-medium text-[1rem] leading-[1.5] text-[#1e293b] dark:text-white',
								'border-[0.5px] border-[#1d4ed8] dark:border-[#60a5fa]',
								'hover:bg-[#f1f5f9] dark:hover:bg-[#0f172a]',
							)}
						>
							See full resume (PDF)
						</a>
					</ul>
				</section>
				<section class='gap-4 shrink-0 flex flex-col'>
					<h2 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white shrink-0'>
						Personal projects
					</h2>
					<ul class='grid grid-cols-2 gap-2 items-stretch shrink-0'>
						<For each={PROJECTS}>{project =>
							<li>
								<Project
									name={project.name}
									description={project.description}
									tags={project.tags}
									href={project.href}
								/>
							</li>
						}</For>
					</ul>
				</section>
			</Section>
		</Layout>
	);
};
