import { UseNightShiftTypes } from "mazeof-react/dist/hooks/nightShiftTypes";


export type AppContextType = UseNightShiftTypes & {  
	shoModal : boolean, 
	setShowModal : (mode : boolean) => void
};

export type AlphabetPickerContextType = {
	letter : string,
	setLetter: React.Dispatch<React.SetStateAction<string>>,
	pickLetter : (letter:string) => void;
	filtered : PickedCountryType[],
	filteredReference : PickedCountryType[],
	cut : number,
	page : number, 
	setPage : (page:number) => void
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
	latitude: number;
	longitude: number;
	country: string;
	alpha2 : string;
};
