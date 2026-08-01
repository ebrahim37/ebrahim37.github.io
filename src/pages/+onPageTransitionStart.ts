export async function onPageTransitionStart() {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
		return;

	document.documentElement.classList.add('page-transitioning');
	await new Promise(resolve => setTimeout(resolve, 150));
}
