const units: { unit: Intl.RelativeTimeFormatUnit, scale: number }[] = [
	{ unit: 'year',   scale:  365     * 24 * 60 * 60 * 1000 },
	{ unit: 'month',  scale: (365/12) * 24 * 60 * 60 * 1000 },
	{ unit: 'day',    scale:            24 * 60 * 60 * 1000 },
	{ unit: 'hour',   scale:                 60 * 60 * 1000 },
	{ unit: 'minute', scale:                      60 * 1000 },
	{ unit: 'second', scale:                           1000 },
];

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const getRelativeTime = (d1: number, d2 = new Date()): string => {
	const elapsed = d1 - (+d2);

	//Math.abs accounts for both "past" & "future" scenarios
	for (const {unit, scale} of units)
		if (Math.abs(elapsed) > scale || unit === 'second')
			return rtf.format(Math.round(elapsed/scale), unit);
	return '? days ago';
};
