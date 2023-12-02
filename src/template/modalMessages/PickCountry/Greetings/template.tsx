import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { AppContextType } from "../../../../resources/types";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import { Alert, ListGroup } from "react-bootstrap";

export const Template = ({ prefix }: any) => {
    const { themes, greetings } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	return (
		<div className={pre(`feat feat-${themes.theme}`)}>
			{greetings.length ? <>
				<hr />
				<h6>You can greet in:</h6>
			</> : ""}
			<div className="all-greetings">
				{greetings.length ? greetings.map((g,i) => (<ListGroup key={`language-${g.language}`} as="ol">
					<ListGroup.Item
						as="li"
						key = {i}
						className="language d-flex justify-content-between align-items-start"
					>
						<div className="ms-2 me-auto">
							<div className="fw-bold">{g.language}</div>
							<ul className="greetings">
								{g.greetings.map((g, i) => <ListGroup.Item key={`${g}-${i}`} variant="btn" as="button">{g}</ListGroup.Item>)}
							</ul>
						</div></ListGroup.Item></ListGroup>
				)) : <>
					<hr />
					<Alert variant="info">
						Unfortunately, we do not have found any way you can greet in this country 😥
					</Alert>
				</>}
			</div>
		</div>
	);
};