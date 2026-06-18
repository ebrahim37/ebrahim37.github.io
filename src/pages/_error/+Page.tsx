import { usePageContext } from 'vike-solid/usePageContext';
import { useConfig } from 'vike-solid/useConfig';

import { Header } from '~/components/Header.tsx';
import { Section } from '~/components/Section.tsx';

export function Page() {
	const config = usePageContext().is404 ? {
		title: 'Page not found / Ebrahim Haghshenas',
		description: 'The requested page could not be found.',
	} : {
		title: 'Error / Ebrahim Haghshenas',
		description: 'Something went wrong while rendering the page.',
	};
	useConfig()(config);

	return (
		<>
			<Header isResume={false} />
			<Section comp='div' cnArg='p-4 md:p-8 min-h-full flex flex-col gap-8'>
				<h1 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white'>
					{config.description}
				</h1>
			</Section>
		</>
	);
}