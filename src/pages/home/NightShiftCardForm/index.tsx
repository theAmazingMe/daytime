import { Template } from "./template";
import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import { AlphabetPickerContextType, AppContextType, PickedCountryType } from "../../../resources/types";
import { useRapidApiSuntime } from "../../../hooks/UseRapidApiSuntime";
import data from "../../../resources/countries-with-coordinates.json";
import greetingsData from "../../../resources/greetingsByCountry.json";
import { useListFilter } from "../../../hooks/UseListFilter";
import { PickCountry } from "../../../template/modalMessages/PickCountry";
import { usePagination } from "../../../hooks/UsePagination";
import { INITIAL_CUT } from "../../../resources/constants";

export const AlphabetPickerContext = createContext<AlphabetPickerContextType | null>(null);
export const NightShiftCardForm = () => {
	const [_, setPicked] = useState(null);
	const context = useContext(AppContext) as AppContextType;
	const { setGreetings, displayModal } = useContext(AppContext) as AppContextType;
	const { apply } = useRapidApiSuntime(
		"REACT_APP_X_RAPID_API_KEY",
		(context)
	);
	const [letter, setLetter] = useState("");
	const countryList = (data.ref_country_codes).sort((a, b) => a.country < b.country ? -1 : a.country > b.country ? 1 : 0);
	const filterHook = useListFilter(countryList);
	const { filtered, filterByCriteria } = filterHook;
	const { paginate, cut, page, setPage, filteredReference, setFilteredReference } = usePagination(countryList, filterHook, INITIAL_CUT)
	const pickLetter = (alphaLetter: string) => {
		setLetter(alphaLetter);
		setFilteredReference(filterByCriteria(alphaLetter, (c) => c.country));
	}

	const greetingList: any = greetingsData;
	const prepareGreetings = (country: PickedCountryType) => {

		const greetingForCountry = greetingList[country.country];
		if (greetingForCountry) {
			const toYield = Object.keys(greetingForCountry)
				.filter(key => key != "flag")
				.map((language) => ({
					language: language,
					greetings: greetingForCountry[language]
				})
				)
			setGreetings(toYield);
		} else {
			setGreetings([]);
		}

	}
	const actions = (index: number) => ({
		Close: {
			variant: "secondary",
			action: () => {
				setGreetings([]);
				return false;
			}
		},
		Pick: {
			action: () => {
				apply(filtered[index]);
				setGreetings([]);
				return false;
			}
		}
	})

	const showModal = (country: PickedCountryType, index: number) => {
		prepareGreetings(country);
		displayModal(
			`Pick ${country.country} ?`,
			<PickCountry country={country} />,
			actions(index)
		)
	}

	const onSelect = (index: any) => {
		setPicked(index);
		const country = filtered[index];
		showModal(country, index);
	};

	useEffect(() => {
		setFilteredReference(filterByCriteria(letter, (c) => c.country));
	}, []);

	const getGreetingCount = (index: number): number => {
		const country = filtered[index].country;
		const greetingForCountry  = greetingList[country];
		let count = 0;
		if (greetingForCountry) {
			Object.keys(greetingForCountry)
				.filter(key => key != "flag")
				.map((language) => {
					count += greetingForCountry[language].length
				})
		}
		return count;
	}

	return (
		<AlphabetPickerContext.Provider value={{ letter, setLetter, pickLetter, filtered, cut, page, setPage, paginate, filteredReference }} >
			<Template onSelect={onSelect} getGreetingCount={getGreetingCount}/>
		</AlphabetPickerContext.Provider>
	);
};
