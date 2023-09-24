import { useContext } from "react";
import { Template } from "./template";
import { THEME_DARK, THEME_DEFAULT } from "../../../resources/constants";
import { useToggle } from "../../../hooks/UseToggle";
import { AppContext } from "../../../App";
import { AppContextType } from "../../../resources/types";

export const NithModeSwitch = () => {
	const { theme, setTheme } = useContext(AppContext) as AppContextType;
	const { state: isDark, toggle: switchMode } = useToggle(
		theme === THEME_DEFAULT
	);

	const handleNightSwitch = () => {
		switchMode();
		setTheme(isDark ? THEME_DARK : THEME_DEFAULT);
	};

	return <Template handleNightSwitch={handleNightSwitch} isDark={isDark} />;
};
