import { useContext } from "react";
import { Template } from "./template";
import { AlphabetPickerContext } from "..";
import { AlphabetPickerContextType } from "../../../../resources/types";

export const ResultPagination = () => {

	const { paginate, page, setPage, cut , filteredReference} = useContext(AlphabetPickerContext) as AlphabetPickerContextType;
	const pickPage = (pageNumber: number) => {
		paginate(pageNumber);
		setPage(pageNumber)
	}

	const getPageCount = () => {
		return Math.ceil(filteredReference.length / cut);
	}

	const pickRelativePage = (incrementor: number) => {

		const nextValue = page + incrementor;

		if (0 < nextValue && nextValue <= getPageCount()) {
			paginate(page + incrementor);
			setPage(page + incrementor)
		}
	}

	return <Template prefix="pagination" pickPage={pickPage} pickRelativePage={pickRelativePage} pageCount={getPageCount()} />;
};