import axios from "axios";
import { isoDate } from "./utils";
import { UseNightShiftTypes } from "mazeof-react/dist/hooks/nightShiftTypes";
import { PickedCountryType } from "../../resources/types";

export const useRapidApiSuntime = (
	X_RapidAPI_Key: string,
	context: UseNightShiftTypes
) => {
	const env = process.env;
	const { cookiesPref } = context;

	const request = async (options: any) => {
		let result;
		try {
			const response = await axios.request(options);
			result = response.data;
		} catch (error) {
			result = error;
		}
		return result;
	};

	const apply = async (pickedCountry: PickedCountryType) => {
		const date = isoDate(new Date());
		const options = {
			method: "GET",
			url: "https://sunset-time-sunrise-time-by-city-rest-api.p.rapidapi.com/bycoordinates",
			params: {
				lat: `${pickedCountry.latitude}`,
				lon: `${pickedCountry.longitude}`,
				date,
			},
			headers: {
				"X-RapidAPI-Key": env[X_RapidAPI_Key],
				"X-RapidAPI-Host":
					"sunset-time-sunrise-time-by-city-rest-api.p.rapidapi.com",
			},
		};

		const remapped = {
			la: pickedCountry.latitude,
			lo: pickedCountry.longitude,
			country: pickedCountry.country
		};
		
		const data = { country: { ...remapped }, ...(await request(options)) };
		saveSuntime(data);
	};

	const saveSuntime = (data: any) => {
		if (data.sun) {
			const sun = data.sun;
			cookiesPref.setPreferences("sun", {
				...data.country,
				ref: sun.dawn,
				dawn: new Date(sun.dawn).toLocaleTimeString(),
				dusk: new Date(sun.dusk).toLocaleTimeString(),
			});
		}
	};
	return { apply };
};
