import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { cn } from '~/utils/cn';

export const Section: ParentComponent<{
	comp: 'section' | 'header' | 'div' | 'article',
	cnArg: string,
}> = props => {
	const baseClass = 'mx-auto w-full md:w-[72ch] border-x-[0.5px] border-[#e2e8f0] dark:border-[#334155]';

	return (
		<Dynamic
			component={props.comp}
			class={cn(baseClass, props.cnArg)}
		>
			{props.children}
		</Dynamic>
	);
};