import type { PageContextClient } from 'vike/types';

// normal routes omit is404, but retain is404=true after client-side navigation from _error
// fix by defining is404 on all routes
export function onCreatePageContext(pageContext: PageContextClient) {
	pageContext.is404 = pageContext.is404 === true;
}