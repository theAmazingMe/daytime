import "./style.scss";
import { Button, ButtonGroup, Card, InputGroup } from "react-bootstrap";
import { AlphabetPickerContextType, AppContextType, PickedCountryType } from "../../../resources/types";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { AlphabetPages } from "./AlphabetPages";
import { useContext } from "react";
import { ResultPagination } from "./ResultPagination";
import { AlphabetPickerContext } from ".";
import { AppContext } from "../../../App";
import ReactCountryFlag from "react-country-flag"
import { CountryBadge } from "./CountryBadge";


export const Template = ({
	onSelect, getGreetingCount
}: any) => {

	const { themes } = useContext(AppContext) as AppContextType;
	const { filtered } = useContext(AlphabetPickerContext) as AlphabetPickerContextType
	const pre = useClassPrefix("ns-c-form")

	return (
		<Card>
			<Card.Body>
				<div className={pre(`feat feat-${themes.theme}`)}>
					<AlphabetPages></AlphabetPages>
					<ResultPagination />
					<div className="row countries-list">
						{filtered.map(({ country, alpha2,noflag}, i) => {
							const count = getGreetingCount(i);
							return (
								<div key={i} className="col-lg-4 col-sm-6" >
									<div className="btn country-picker" onClick={() => onSelect(i)} >

										{!noflag ?<ReactCountryFlag countryCode={alpha2} svg /> : ""}
										{count > 0 ? <CountryBadge key={`badge-${i}`}>{count}</CountryBadge> : ""}
										{country}

									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};
