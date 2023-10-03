import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { AppContext } from "../../../App";
import { AppContextType } from "../../../resources/types";

export const Template = ({ prefix }: any) => {
    const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	return (
		<div className={pre(`feat feat-${themes.theme}`)}>
			<h1>Your "RemoveNightShift" Component is ready !</h1>
		</div>
	);
};