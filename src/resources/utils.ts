export const isoDate = (date: Date, withTime: boolean = false) => {
	const iso = date.toISOString();
	return withTime ? iso : iso.substring(0, iso.indexOf("T"));
};

export const isDay = (dawn: number, dusk: number) => {
	const hours = floatingHours(new Date());
	const isDayTime = hours > dawn && hours < dusk;

	return isDayTime;
};

export const floatingHours = (date: Date) => {
	return date.getHours() + (date.getMinutes() / 60)
}

export const range = (start: number, end: number) => {
	return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

export const hasSunCookies = (cookies: {
	[x: string]: any;
}, cookiesOf: string): { sun: any } => {
	return !!cookies && Object.keys(cookies).length ? cookies[cookiesOf] : { sun: null };
}

/**
 * Make the spread grow the more we approach limits so the frame in 
 * the other way for displaying pagination in the other direction raises
 * 
 * @param page the current page
 * @param spread the number of pages to give access to around the selected page
 * @param pageCount the page count (divisions of the content by a certain cut)
 * @returns the spread raised to another value or the same as initialy if no limit reached
 */
export const getRescaledSpread = (page: number, spread: number, pageCount: number) => {
	let result = spread;
	if (page - 1 - spread < 0) {
		result += (page - spread - 1) * -1;
	}
	if (page + spread > pageCount) {
		result += ((page + spread) - pageCount);
	}
	return result;
}