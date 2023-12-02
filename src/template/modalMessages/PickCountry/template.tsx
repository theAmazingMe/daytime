import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { AppContext } from "../../../App";
import { AppContextType, PickedCountryType } from "../../../resources/types";
import ReactCountryFlag from "react-country-flag";
import { Greetings } from "./Greetings";

export const Template = ({ prefix, country }: any) => {
	const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	const data = country as PickedCountryType;

	return (
		<div className={pre(`feat feat-${themes.theme}`)}>

			<div className="row">
				<div className="col-sm-3">
					{
						!country.noflag ?
							(<div className="emojiFlag">
								<ReactCountryFlag countryCode={country.alpha2} svg />
							</div>) : ""
					}
				</div>
				<div className="col-sm-8">
					<div className="row">
						<div className="col-4 category">name</div><div className="col-8">{data.country}</div>
						{data.more ? <><div className="col-4 category">precision</div><div className="col-8">{data.more}</div></> : ""}
						<div className="col-4 category">latitude</div><div className="col-8">{data.latitude}</div>
						<div className="col-4 category">longitude</div><div className="col-8">{data.longitude}</div>
					</div>
				</div>
			</div>
			<Greetings></Greetings>
		</div>
	);
};