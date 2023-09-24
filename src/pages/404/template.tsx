import { useContext } from "react";
import "./style.scss";
import { AppContext } from "../../App";
import { AppContextType } from "../../resources/types";

export const Template = (props: any) => {
	const { theme } = useContext(AppContext) as AppContextType;

	return (
		<div id="p404" className={`feat-${theme}`}>
			<h3>Page Not Found</h3>
		</div>
	);
};
