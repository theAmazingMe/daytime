import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { AppContext } from "../../../../../App";
import { AlphabetPickerContextType, AppContextType } from "../../../../../resources/types";
import { Pagination } from "react-bootstrap";
import { AlphabetPickerContext } from "../..";

export const Template = ({ prefix, alphabet, children }: any) => {
	const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	const { letter, pickLetter } = useContext(AlphabetPickerContext) as AlphabetPickerContextType

	return (
		<div className={pre(`feat feat-${themes.theme}`)}>
			<Pagination>
				{children}
				{(alphabet as string[]).map((alphaLetter, i) => {
					return (
						<Pagination.Item className={`${themes.theme}`} key={`let-${alphaLetter}`} active={alphaLetter === letter} onClick={() => pickLetter(alphaLetter)}>
							{alphaLetter}
						</Pagination.Item>)
				})}</Pagination>
		</div>
	);
};