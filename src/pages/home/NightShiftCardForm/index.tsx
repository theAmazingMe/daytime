import { Template } from "./template";
import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import { AlphabetPickerContextType, AppContextType } from "../../../resources/types";
import { useRapidApiSuntime } from "../../../hooks/UseRapidApiSuntime";
import data from "../../../resources/countries-with-coordinates.json";
import { useListFilter } from "../../../hooks/UseListFilter";

export const AlphabetPickerContext = createContext<AlphabetPickerContextType | null>(null);
export const NightShiftCardForm = () => {
	const [picked, setPicked] = useState(null);
	const { apply } = useRapidApiSuntime(
		"REACT_APP_X_RAPID_API_KEY",
		(useContext(AppContext) as AppContextType)
	);
	const [letter, setLetter] = useState("");
	const initialCut = 18;
	const countryList = (data.ref_country_codes).sort((a, b) => a.country < b.country ? -1 : a.country > b.country ? 1 : 0);
	const { filtered, filterByCriteria, paginate, cut, page, setPage, filteredReference } = useListFilter(countryList, initialCut);

	const pickLetter = (alphaLetter: string) => {
		setLetter(alphaLetter);
		filterByCriteria(alphaLetter, (c) => c.country);
	}

	const onSelect = (index: any) => {
		
		setPicked(index);
	};

	useEffect(() => {
		filterByCriteria(letter, (c) => c.country);
	}, []);

	return (
		<AlphabetPickerContext.Provider value={{ letter, setLetter, pickLetter, filtered, cut, page, setPage, paginate, filteredReference }} >
			<Template picked={picked} onClickFetchData={apply} onSelect={onSelect} />
		</AlphabetPickerContext.Provider>
	);
};
