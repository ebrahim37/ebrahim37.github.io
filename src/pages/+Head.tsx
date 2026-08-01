export function Head() {
	return (
		<>
			<meta charset='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='theme-color' content='#ffffff' />
			<link rel='icon' href='data:image/png;base64,iVBORw0KGgo=' />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
			<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap' />
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
						document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#000000');
					}
				} catch (error) {}
			`}</script>
		</>
	);
}
