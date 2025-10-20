import { For } from 'solid-js';
import { useParams, useNavigate } from '@solidjs/router';
import { Title, Meta } from '@solidjs/meta';

import { HomePagePost } from '~/components/HomePagePost.tsx';
import { Layout } from '~/components/Layout.tsx';
import { Section } from '~/components/Section.tsx';
import { Header } from '~/components/Header.tsx';
import { POSTS, TAGS } from '~/utils/posts.ts';

export default () => {
	const params = useParams();
	const navigate = useNavigate();
	const tag = TAGS.find(x => x.slug === params.tag)!;
	if (!tag) {
		navigate('/tag_not_found', { replace: true });
		return;
	}
	const posts = POSTS.filter(x => x.tags.includes(tag.slug));

	return (
		<Layout>
			<Title>{tag.name} articles / Ebrahim Haghshenas</Title>
			<Meta name='description' content={`Dive in to my "${tag.name}" articles.`} />
			<Header isResume={false} />
			<Section comp='div' cnArg='min-h-full flex flex-col'>
				<h2 class='text-[1.875rem] pt-4 px-4 md:pt-8 md:px-8 font-normal shrink-0'>
					{tag.name}
				</h2>
				<For each={posts}>{(post, i) =>
					<HomePagePost
						slug={post.slug}
						title={post.title}
						subtitle={post.subtitle}
						tags={post.tags}
						timestamp={post.timestamp}
						image={post.image}
						topBorder={i() === 0 ? false : true}
						bottomBorder={i() === (posts.length - 1) ? false: true}
					/>
				}</For>
			</Section>
		</Layout>
	);
};
