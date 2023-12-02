import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { ServerCrashPropsTypes } from "./types";
import { AppContext } from "../../App";
import { AppContextType } from "../../resources/types";

export const Design = ({ prefix } : ServerCrashPropsTypes) => {
	const pre = useClassPrefix(prefix);
	const { themes } = useContext(AppContext) as AppContextType

	return (
		<div className={pre(`feat feat-${themes}`)}>
			<h1>Your "ServerCrash" Component is ready !</h1>
		</div>
	);
};