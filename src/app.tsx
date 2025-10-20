import { MetaProvider, Title, Meta } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';

import '~/app.css';

export default () => {
	return (
		<Router
			root={props => (
				<MetaProvider>
					<Title>✌️ Ebrahim Haghshenas / Software Engineer / Toronto 🇨🇦</Title>
					<Meta name='description' content='Personal website of Ebrahim Haghshenas.' />
					<Suspense>{props.children}</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
};
