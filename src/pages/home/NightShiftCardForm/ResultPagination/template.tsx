import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import { AlphabetPickerContextType, AppContextType } from "../../../../resources/types";
import { Pagination } from "react-bootstrap";
import { AlphabetPickerContext } from "..";
import { getRescaledSpread, range } from "../../../../resources/utils";

export const Template = ({ prefix, pickPage,pickRelativePage, pageCount }: any) => {
	const { themes } = useContext(AppContext) as AppContextType;
	const { page } = useContext(AlphabetPickerContext) as AlphabetPickerContextType;
	const pre = useClassPrefix(prefix);

	const initialSpread = 1;

	const spread = getRescaledSpread(page, initialSpread, pageCount);

	const isAroundOf = (r: number, page: number) => {
		return (r >= page - spread && r < page) || (r <= page + spread && r >= page)
	}
	return (
		<div className={pre(`feat feat-${themes.theme}`)}>
			{pageCount > 1 ? (<Pagination>
				<Pagination.Prev className={`${themes.theme}`} onClick={() => pickRelativePage(+-1)}/>
				{page - spread > 1 ? <><Pagination.Item onClick={() => pickPage(1)}>1</Pagination.Item><Pagination.Ellipsis /></> : ""}
				{[...range(1, pageCount)].filter(r => isAroundOf(r, page)).map((r,i) => {
					return <Pagination.Item key={i} className={`${themes.theme}`} active={page===r} onClick={() => pickPage(r)}>{r}</Pagination.Item>
				})}
				{page + spread < pageCount ? <><Pagination.Ellipsis /><Pagination.Item onClick={() => pickPage(pageCount)}>{pageCount}</Pagination.Item></> : ""}
				<Pagination.Next className={`${themes.theme}`} onClick={() => pickRelativePage(+1)}/>
			</Pagination>) : ""}
		</div>
	);
};