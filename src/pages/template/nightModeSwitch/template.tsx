import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./style.scss";
import { AppContext } from "../../../App";
import { AppContextType } from "../../../resources/types";

export const Template = () => {
	const { themes } = (useContext(AppContext) as AppContextType);
	
	const modeIcon = themes.isDarkMode
		? icon({ name: "sun", style: "solid" })
		: icon({ name: "moon", style: "solid" });

	return (
		<Button onClick={themes.handleNightSwitch} className={`btn-${themes.theme} btn-sun-moon`}>
			<FontAwesomeIcon icon={modeIcon} />
		</Button>
	);
};
