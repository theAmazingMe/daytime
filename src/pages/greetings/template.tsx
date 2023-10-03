import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { AppContextType } from "../../resources/types";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Template = ({ prefix }: any) => {
    const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	return (
		<div className={pre(`feat feat-${themes.theme}`)}>
			<h1>Your "Greetings" Component is ready !</h1>
		</div>
	);
};