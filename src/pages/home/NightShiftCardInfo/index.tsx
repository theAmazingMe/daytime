import { useContext } from "react";
import { AppContext } from "../../../App";
import { Template } from "./template";
import { AppContextType } from "../../../resources/types";
import { RemoveNightShift } from "../../../template/modalMessages/RemoveNightShift";
import { UseModal } from "../../../ModalPack/hooks/UseModal";

export const NightShiftCardInfo = () => {
	const { cookiesPref, displayModal } = useContext(AppContext) as AppContextType;

	const actions = {
		Unlink: {
			action: () => {
				cookiesPref.setPreferences("sun", null);
				return false;
			}
		}
	}

	const removeSunPreferences = () => {
		displayModal(
			"Unlink ?",
			<RemoveNightShift />,
			actions
		);
	}

	return <Template remove={removeSunPreferences} prefix="ns-c-i" />;
};