import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { AppContextType } from "../../../../resources/types";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import { Badge } from "react-bootstrap";

export const Template = ({ prefix,children }: any) => {
    const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	return (
		<>
			<Badge bg={`${themes.theme}`} className={pre(`feat feat-${themes.theme}`)+" btn-circle"}>{children}</Badge>
		</>
	);
};