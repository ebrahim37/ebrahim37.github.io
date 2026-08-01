import { For } from 'solid-js';
import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data.ts';
import { HomePagePost } from '~/components/HomePagePost.tsx';

export function Page() {
	useConfig()({
		title: 'Blog | Ebrahim Haghshenas',
		description: 'Writing by Ebrahim Haghshenas about Linux infrastructure, self-hosting, and software.',
	});
	const data = useData<Data>();

	return (
		<>
			<h1 class='page-heading'>posts/</h1>
			<ul class='card-list'>
				<For each={data.posts}>{post => <HomePagePost post={post} />}</For>
			</ul>
		</>
	);
}
