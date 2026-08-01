import { usePageContext } from 'vike-solid/usePageContext';
import { useConfig } from 'vike-solid/useConfig';

export function Page() {
	const is404 = usePageContext().is404;
	const config = is404 ? {
		title: 'Page not found | Ebrahim Haghshenas',
		description: 'The requested page could not be found.',
	} : {
		title: 'Error | Ebrahim Haghshenas',
		description: 'Something went wrong while rendering the page.',
	};
	useConfig()(config);

	return (
		<>
			<h1 class='page-heading'>{is404 ? '404/' : 'error/'}</h1>
			<p class='mb-4 text-(--gray)'>{config.description}</p>
			<a class='text-link' href='/'>Return to the blog</a>
		</>
	);
}
