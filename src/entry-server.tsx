// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

/*
var startTheme = 'light';
if (localStorage.getItem('theme')) {
	startTheme = localStorage.getItem('theme');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	startTheme = 'dark';
}
if (startTheme === 'dark') {
	document.documentElement.classList.add('dark');
}
*/

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang='en' class='overscroll-y-none'>
				<head>
					<title>ebra.dev</title>
					<meta charset='utf-8' />
					<meta name='description' content='Personal website of Ebrahim Haghshenas, Full Stack Developer.' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='data:image/png;base64,iVBORw0KGgo=' />
					<script>
						var startTheme="light";localStorage.getItem("theme")?startTheme=localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches&&(startTheme="dark"),"dark"===startTheme&&document.documentElement.classList.add("dark");
					</script>
					{assets}
				</head>
				<body class='relative overscroll-y-none'>
					<div class='backup-bg' />
					<div id='app'>{children}</div>
					{scripts}
					<canvas id='gradient-canvas' />
					<script src='/gradient.js' />
				</body>
			</html>
		)}
	/>
));
