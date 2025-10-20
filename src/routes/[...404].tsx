import { Header } from '~/components/Header.tsx';
import { Layout } from '~/components/Layout.tsx';
import { Section } from '~/components/Section.tsx';

export default () => {
	return (
		<Layout dontHighlightLinks>
			<Header isResume={false} />
			<Section comp='div' cnArg='p-4 md:p-8 min-h-full flex flex-col gap-8'>
				<h1 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white shrink-0'>
					Page not found.
				</h1>
			</Section>
		</Layout>
	);
};
