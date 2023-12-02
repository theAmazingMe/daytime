import { useContext } from "react";
import "./style.scss";
import { AppContext } from "../../../App";
import { AppContextType } from "../../../resources/types";
import { Col, Row } from "react-bootstrap";
import { NightShiftCardForm } from "../NightShiftCardForm";
import { COOKIES_KEY } from "../../../resources/constants";
import { useClassPrefix } from "mazeof-react/dist/hooks"
import { UseNightShiftTypes } from "mazeof-react/dist/hooks/nightShiftTypes";
import { NightShiftCardInfo } from "../NightShiftCardInfo";
import { hasSunCookies } from "../../../resources/utils";

export const Template = ({ prefix }: any) => {
	const { themes, cookiesPref } = (useContext(AppContext) as AppContextType & UseNightShiftTypes);
	const pre = useClassPrefix(prefix);

	const { sun } = hasSunCookies(cookiesPref.cookies,COOKIES_KEY);

	return (
		<div className={pre(`feat feat-${themes.theme}`)}>
			<Row className="justify-content-center">
				<Col className="col-md-8">
					{sun ? <NightShiftCardInfo /> : ""}
					<NightShiftCardForm />
				</Col>
			</Row>
		</div>
	);
};
