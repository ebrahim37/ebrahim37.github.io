import { type Component, For } from 'solid-js';
import { useConfig } from 'vike-solid/useConfig';

import { Header } from '~/components/Header.tsx';
import { Section } from '~/components/Section.tsx';

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
		<li class='grid grid-cols-1 xs:grid-cols-[120px_auto] leading-normal items-center gap-2 rounded-2xl p-4 xs:px-8 xs:py-4 text-[#64748b] bg-[#f1f5f9] dark:text-[#94a3b8] dark:bg-[#0f172a]'>
			<h3 class='text-[#1e293b] dark:text-white font-medium text-[1rem]'>
				{props.label}
			</h3>
			<ul>
				<For each={props.list}>{(listItem, i) =>
					<li class='inline text-[0.875rem]'>
						{listItem}{i() !== props.list.length - 1 && ', '}
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
		<a href={props.href} class='h-full flex flex-col leading-normal gap-2 rounded-2xl p-4 xs:p-8 border text-[#64748b] border-[#1d4ed8] hover:bg-[#f1f5f9] dark:text-[#94a3b8] dark:border-[#60a5fa] dark:hover:bg-[#0f172a]'>
			<h3 class='text-[1.125rem] font-medium text-[#1e293b] dark:text-white'>
				{props.name}
			</h3>
			<p class='text-[0.875rem]'>
				{props.description}
			</p>
			<span class='mt-auto text-[0.75rem] text-[#1d4ed8] dark:text-[#60a5fa]'>
				{props.tags}
			</span>
		</a>
	);
};

export function Page() {
	useConfig()({
		title: 'Resume / Ebrahim Haghshenas',
		description: 'Experience, projects, and skills of Ebrahim Haghshenas.',
	});

	return (
		<>
			<Header isResume />
			<Section comp='div' cnArg='p-4 md:p-8 min-h-full flex flex-col gap-8'>
				<section class='flex flex-col gap-4'>
					<h2 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white'>
						More about me
					</h2>
					<ul class='flex flex-col gap-2 list-none'>
						<List label='Languages' list={LANGUAGES} />
						<List label='Libraries' list={LIBRARIES} />
						<a href={RESUME_LINK} class='flex items-center justify-center leading-normal rounded-2xl p-4 xs:px-8 xs:py-4 text-[1rem] font-medium border-[0.5px] text-[#1e293b] border-[#1d4ed8] hover:bg-[#f1f5f9] dark:text-white dark:border-[#60a5fa] dark:hover:bg-[#0f172a]'>
							See full resume (PDF)
						</a>
					</ul>
				</section>
				<section class='flex flex-col gap-4'>
					<h2 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white'>
						Personal projects
					</h2>
					<ul class='grid grid-cols-2 gap-2'>
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
		</>
	);
}