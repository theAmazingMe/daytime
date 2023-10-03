import "./style.scss";
import { Button, Card } from "react-bootstrap";
import { AlphabetPickerContextType, AppContextType, PickedCountryType } from "../../../resources/types";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { AlphabetPages } from "./AlphabetPages";
import { useContext } from "react";
import { ResultPagination } from "./ResultPagination";
import { AlphabetPickerContext } from ".";
import { AppContext } from "../../../App";
import ReactCountryFlag from "react-country-flag"

export interface DayTimeProps {
	onSelect: (event: any) => void;
	picked: any;
	onClickFetchData: (pickedCountry: PickedCountryType) => void;
}

export const Template = ({
	onSelect,
	picked,
	onClickFetchData,
}: DayTimeProps) => {

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
						{filtered.map(({ country, alpha2 }, i) => {
							const code = alpha2 as FlagIconCode
							return (
								<div key={i} className="col-lg-4 col-sm-6" >
									<div className="btn country-picker" onClick={() => onSelect(i)}>
										
										<ReactCountryFlag countryCode={alpha2} svg/>
										{country}
									</div>
								</div>
							);
						})}
					</div>

					{picked || picked === 0 ?
						<Button
							onClick={() => {
								onClickFetchData(filtered[picked]);
							}}
						>
							fetch and set
						</Button>
						: ""
					}
				</div>
			</Card.Body>
		</Card>
	);
};
