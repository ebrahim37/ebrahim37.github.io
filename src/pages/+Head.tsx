export function Head() {
	return (
		<>
			<meta charset='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='data:image/png;base64,iVBORw0KGgo=' />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
			<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap' />
			<script>{`
				try {
					var startTheme = 'light';
					if (localStorage.getItem('theme')) {
						startTheme = localStorage.getItem('theme');
					} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
						startTheme = 'dark';
					}
					if (startTheme === 'dark') {
						document.documentElement.classList.add('dark');
					}
				} catch (error) {}
			`}</script>
		</>
	);
}
