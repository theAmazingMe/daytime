import { useState } from "react"

export const useListFilter = <T>(preset: T[], initialCut:number) => {
    const [originalList] = useState(preset);
    const [filtered, setFiltered] = useState(preset);
    const [filteredReference, setFilteredReference] = useState(preset);
    const [cut] = useState(initialCut);
    const [page, setPage] = useState(1);

    const filterByCriteria = (letter: string, criteria: (subject: T) => string) => {

        const filt = letter !== ""? originalList.filter(c => RegExp(`^${letter}`)
        .test(criteria(c))): originalList
        
        setFilteredReference(filt);
        setFiltered(filt)
        setPage(0)
    }

    const paginate = (page: number) => {
        
        const len = filteredReference.length;
        
        const currentStartIndex = (page-1)*cut;

        if(currentStartIndex+cut < len){
            setFiltered(filteredReference.slice(currentStartIndex,currentStartIndex+cut))
        }else{
            setFiltered(filteredReference.slice(currentStartIndex))
        }
    }

    return { filtered, filterByCriteria,filteredReference, paginate, cut, page, setPage , originalList};
}