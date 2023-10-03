import { useContext } from "react";
import { AppContext } from "../../../App";
import { Template } from "./template";
import { AppContextType } from "../../../resources/types";

export const NightShiftCardInfo = () => {
	const {cookiesPref, setShowModal} = useContext(AppContext) as AppContextType;

	const removeSunPreferences = () => {
		setShowModal(true);
		//cookiesPref.setPreferences("sun",null)
	}

	return <Template remove={removeSunPreferences} prefix="ns-c-i" />;
};