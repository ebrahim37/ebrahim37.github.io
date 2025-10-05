import type { ParentComponent } from 'solid-js';

export const Social: ParentComponent<{
	href: string;
}> = props => {
	return (
		<a href={props.href} class='px-2 py-1 rounded-[14px] text-[#0070F3] transition-all duration-250 ease hover:opacity-80 hover:bg-[#0070F333]'>
			{ props.children }
		</a>
	);
};