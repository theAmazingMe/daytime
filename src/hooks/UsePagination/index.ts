import { useState } from "react";
import { UseListFilterType, useListFilter } from "../UseListFilter";

export const usePagination = <T>(preset: T[], filterHook : UseListFilterType<T>, initialCut: number) => {
    const { setFiltered } = filterHook;
    const [cut] = useState(initialCut);
    const [filteredReference, setFilteredReference] = useState(preset);
    const [page, setPage] = useState(1);
    const paginate = (page: number) => {

        const len = filteredReference.length;

        const currentStartIndex = (page - 1) * cut;

        if (currentStartIndex + cut < len) {
            setFiltered(filteredReference.slice(currentStartIndex, currentStartIndex + cut))
        } else {
            setFiltered(filteredReference.slice(currentStartIndex))
        }
    }

    return { paginate, cut, page, setPage, filteredReference , setFilteredReference}
}