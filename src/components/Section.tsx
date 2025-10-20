import { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { cn } from '~/utils/cn';

const SectionComponent: ParentComponent<{ classArg: string }> = props => (
	<section class={props.classArg}>{props.children}</section>
);

const HeaderComponent: ParentComponent<{ classArg: string }> = props => (
	<header class={props.classArg}>{props.children}</header>
);

const DivComponent: ParentComponent<{ classArg: string }> = props => (
	<div class={props.classArg}>{props.children}</div>
);

const ArticleComponent: ParentComponent<{ classArg: string }> = props => (
	<article class={props.classArg}>{props.children}</article>
);

const options = {
	section: SectionComponent,
	header: HeaderComponent,
	div: DivComponent,
	article: ArticleComponent,
};

export const Section: ParentComponent<{
	comp: 'section' | 'header' | 'div' | 'article',
	cnArg: string,
}> = props => {
	return (
		<Dynamic
			component={options[props.comp]}
			classArg={cn(
				'mx-auto w-full md:w-[72ch] border-x-[0.5px] border-[#e2e8f0] dark:border-[#334155]',
				props.cnArg,
			)}
		>
			{props.children}
		</Dynamic>
	);
};
