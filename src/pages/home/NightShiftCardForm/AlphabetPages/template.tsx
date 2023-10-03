import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { AlphabetPickerContextType, AppContextType } from "../../../../resources/types";
import { AppContext } from "../../../../App";
import { Pagination } from "react-bootstrap";
import { AlphabetPickerContext } from "../";
import { AlphabetPageItems } from "./AlphabetPageItems";

export const Template = ({ prefix }: any) => {
	const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
	const half = Math.ceil(alphabet.length / 2);
	const halphabets: string[][] = [alphabet.slice(0, half), alphabet.slice(half)];

	const { letter, pickLetter } = useContext(AlphabetPickerContext) as AlphabetPickerContextType
	return (
		<div className={pre(`feat feat-${themes.theme}`)}>
			<div className="d-lg-block d-none">
				<AlphabetPageItems alphabet={alphabet}>
					<Pagination.Item className="all" active={"" === letter} onClick={() => pickLetter("")}>Tous</Pagination.Item>
				</AlphabetPageItems>
			</div>
			<div className="d-lg-none">
				<AlphabetPageItems alphabet={halphabets[0]}>
					<Pagination.Item className="all-half" active={"" === letter} onClick={() => pickLetter("")}>Tous</Pagination.Item>
				</AlphabetPageItems>
				<AlphabetPageItems alphabet={halphabets[1]} />
			</div>
		</div>
	);
};