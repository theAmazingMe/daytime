import { useContext } from "react";
import "./style.scss";
import { AppContext } from "../../App";
import { AppContextType } from "../../resources/types";

export const Template = (props: any) => {
	const { theme } = useContext(AppContext) as AppContextType;

	return (
		<div className={`bg-${theme}`}>
			<h3>Login page </h3>
		</div>
	);
};
