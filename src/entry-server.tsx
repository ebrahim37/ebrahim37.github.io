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
			<html lang='en'>
				<head>
					<meta charset='utf-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='data:image/png;base64,iVBORw0KGgo=' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
					<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap' />
					<script>
						var startTheme="light";localStorage.getItem("theme")?startTheme=localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches&&(startTheme="dark"),"dark"===startTheme&&document.documentElement.classList.add("dark");
					</script>
					{assets}
				</head>
				<body>
					<div id='app'>
						{children}
					</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
