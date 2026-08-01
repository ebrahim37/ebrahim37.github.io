export function onPageTransitionEnd() {
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			document.documentElement.classList.remove('page-transitioning');
		});
	});
}
