const dateFormatter = new Intl.DateTimeFormat('en-CA', {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	timeZone: 'UTC',
});

export const formatDate = (timestamp: number) => dateFormatter.format(new Date(timestamp));

const relativeFormatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const formatRelativeDate = (timestamp: number) => {
	const elapsedDays = Math.round((timestamp - Date.now()) / 86_400_000);
	const absoluteDays = Math.abs(elapsedDays);

	if (absoluteDays < 14)
		return relativeFormatter.format(elapsedDays, 'day');

	if (absoluteDays < 365)
		return relativeFormatter.format(Math.round(elapsedDays / 30.4375), 'month');

	return relativeFormatter.format(Math.round(elapsedDays / 365.25), 'year');
};
