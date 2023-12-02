import { useContext, useState } from "react";
import { Template } from "./template";
import { AlphabetPickerContext } from "..";
import { AlphabetPickerContextType } from "../../../../resources/types";

export const AlphabetPages = () => {
	const { letter, pickLetter , setPage} = useContext(AlphabetPickerContext) as AlphabetPickerContextType

	const pickALetter = (letter: string) => {
		pickLetter(letter);
		setPage(1);
		
	}
	return <Template prefix="alpha" letter={letter} selectLetter={pickALetter} />;
};