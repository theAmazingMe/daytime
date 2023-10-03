export const isoDate = (date: Date, withTime: boolean = false) => {
	const iso = date.toISOString();
	return withTime ? iso : iso.substring(0, iso.indexOf("T"));
};

export const isDay = (dawn: number, dusk: number) => {
	const hours = floatingHours(new Date());
	const isDayTime = hours > dawn && hours < dusk;

	return isDayTime;
};

export const floatingHours = (date : Date) => {
    return date.getHours()+(date.getMinutes()/60)
}