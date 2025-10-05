import { Social } from '~/components/Social';
import { Project } from '~/components/Project';
import { ThemeChanger } from '~/components/ThemeChanger';

export default () => {
	return (
		<div class='min-h-dvh flex p-5 justify-center'>
			<div class='glass-card relative opacity-80 my-auto max-w-3xl rounded-3xl p-5 text-black dark:text-white'>
				<div class='absolute top-2 right-2'>
					<ThemeChanger />
				</div>
				<div class='text-3xl font-semibold mb-1 mr-7'>
					👋 Hi, I'm{' '}
					<span class='font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#4b65e8] to-[#ff4ecd]'>
						Ebrahim
					</span>!
				</div>
				<div class='text-sm italic font-light mb-2'>
					Software Engineer
				</div>
				<div class='-mx-2 mb-3 flex gap-3'>
					<Social href='https://drive.google.com/file/d/1ZqPFToCU4kQDG6dCo4Z0z7QGLY_1xBYG/view'>
						Résumé
					</Social>
					<Social href='https://github.com/beans42'>
						GitHub
					</Social>
					<Social href='https://www.linkedin.com/in/ebrahim-hagh'>
						LinkedIn
					</Social>
					<Social href='mailto:hello@ebra.dev'>
						Email
					</Social>
				</div>
				<div class='text-lg mb-1'>
					Some of my projects:
				</div>
				<div class='grid grid-cols-1 gap-2 md:grid-cols-2'>
					<Project
						name='lumite'
						link='https://github.com/beans42/lumite'
						description='Web-based wallet for the Stellar blockchain.'
						tags={[ 'Next.js', 'React', 'blockchain', 'PWA' ]}
					/>
					<Project
						name='maze-solver'
						link='/maze-solver'
						description="Cross-platform maze-solving app using 'Dear ImGui'."
						tags={[ 'C++', 'ImGui', 'algorithms', 'GLFW' ]}
					/>
					<Project
						name='xplorit'
						link='https://github.com/beans42/xplorit'
						description='Fun geocaching-like game designed to promote exploration and exercise.'
						tags={[ 'Node.js', 'Express.js', 'Socket.IO', 'Ionic' ]}
					/>
					<Project
						name='steganography'
						link='https://github.com/beans42/steganography'
						description='Command-line utility for hiding text in images.'
						tags={[ 'C++', 'cryptography' ]}
					/>
					<Project
						name='spigot-compass'
						link='https://github.com/beans42/spigot-compass'
						description="Minecraft spigot plugin for playing 'Speedrunner VS Hunters'."
						tags={[ 'Java', 'Minecraft', 'Spigot' ]}
					/>
					<Project
						name='vec-calc'
						link='/vec-calc'
						description='Calculator for adding/subtracting two euclidean vectors.'
						tags={[ 'Bootstrap', 'HTML5', 'JavaScript' ]}
					/>
				</div>
			</div>
		</div>
	);
};
