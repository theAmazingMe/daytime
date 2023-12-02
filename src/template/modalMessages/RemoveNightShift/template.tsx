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
			<p>
				Do you really want to unlink this country to the dailight configuration ?
			</p>
			<hr/>
			<p>You may want to set something later ...</p>
		</div>
	);
};