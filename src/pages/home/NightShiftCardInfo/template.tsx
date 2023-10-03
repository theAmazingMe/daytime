import { useContext } from "react";
import "./style.scss";
import { AppContext } from "../../../App";
import { AppContextType } from "../../../resources/types";
import { Button, Card } from "react-bootstrap";
import { COOKIES_KEY } from "../../../resources/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useClassPrefix } from "mazeof-react/dist/hooks";

export const Template = ({ prefix , remove}: any) => {
    const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);
	const { cookiesPref } = (useContext(AppContext) as AppContextType);

	const cookies = cookiesPref.cookies;
	const { sun } = !!cookies ? cookies[COOKIES_KEY] : { sun: null };

	const binIcon = icon({name : "trash", style:"solid"});

	return (
		<Card  className={pre(`feat feat-${themes.theme}`)}>
			<Card.Body>
				<Card.Title>Night shift</Card.Title>
				<b>
					Based on {sun.country} ({sun.lo},{sun.la})
				</b>{" "}
				<br />
				<b>dawn at {sun.dawn}</b> <br />
				<b>dusk at {sun.dusk}</b> <br />
				<Button className="btn-circle" variant="danger" onClick={remove}><FontAwesomeIcon icon={binIcon} /></Button>
			</Card.Body>
			<Card.Footer>
				<small> Reference date : {new Date(sun.ref).toString()}</small>
			</Card.Footer>
		</Card>
	);
};