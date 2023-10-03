import { useContext } from "react";
import "./style.scss";
import { AppContext } from "../../App";
import { AppContextType } from "../../resources/types";

export const Template = (props: any) => {
	const { themes } = (useContext(AppContext) as AppContextType);

	return (
		<div id="p404" className={`feat feat-${themes.theme}`}>
			<h3>Page Not Found</h3>
		</div>
	);
};
