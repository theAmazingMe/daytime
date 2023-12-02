import { UseNightShiftTypes } from "mazeof-react/dist/hooks/nightShiftTypes";
import { ModalType } from "../ModalPack/types/types";

export type GreetingsInCountry = {
	language: string,
	greetings: string[]
}

export type Greetings = {
	greetings: GreetingsInCountry[], 
	setGreetings: React.Dispatch<React.SetStateAction<GreetingsInCountry[]>>
}

export type AppContextType =
	UseNightShiftTypes
	& Greetings & ModalType;

export type AlphabetPickerContextType = {
	letter: string,
	setLetter: React.Dispatch<React.SetStateAction<string>>,
	pickLetter: (letter: string) => void;
	filtered: PickedCountryType[],
	filteredReference: PickedCountryType[],
	cut: number,
	page: number,
	setPage: (page: number) => void
	paginate: (page: number) => void
}

export type NightShift = {
	sun: {
		country: string;
		lo: number;
		la: number;
		ref: string;
		dawn: string;
		dusk: string;
	};
};

export type PickedCountryType = {
	noflag? : boolean;
	more? : string;
	latitude: number;
	longitude: number;
	country: string;
	alpha2: string;
};
