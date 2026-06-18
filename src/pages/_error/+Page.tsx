import { usePageContext } from 'vike-solid/usePageContext';
import { useConfig } from 'vike-solid/useConfig';

import { Header } from '~/components/Header.tsx';
import { Section } from '~/components/Section.tsx';

export function Page() {
	const pageContext = usePageContext();
	const title = pageContext.is404 ? 'Page not found / Ebrahim Haghshenas' : 'Error / Ebrahim Haghshenas';
	const description = pageContext.is404 ? 'The requested page could not be found.' : 'Something went wrong while rendering the page.';

	const config = useConfig()({
		title,
		description,
	});

	return (
		<>
			<Header isResume={false} />
			<Section comp='div' cnArg='p-4 md:p-8 min-h-full flex flex-col gap-8'>
				<h1 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white'>
					{description}
				</h1>
			</Section>
		</>
	);
}