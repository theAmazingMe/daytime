import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./style.scss";
import { AppContext } from "../../../App";
import { templateProps } from "../../../resources/templateProps";
import { AppContextType } from "../../../resources/types";

export const Template = ({ handleNightSwitch, isDark }: templateProps) => {
	const { theme } = useContext(AppContext) as AppContextType;
	const modeIcon = isDark
		? icon({ name: "sun", style: "solid" })
		: icon({ name: "moon", style: "solid" });

	return (
		<Button onClick={handleNightSwitch} className={`btn-${theme} btn-sun-moon`}>
			<FontAwesomeIcon icon={modeIcon} />
		</Button>
	);
};
