import { useState } from "react"

export type UseListFilterType<T> = {
    filtered: T[];
    setFiltered: React.Dispatch<React.SetStateAction<T[]>>;
    originalList: T[];
    filterByCriteria: (letter: string, criteria: (subject: T) => string) => T[];
}

export const useListFilter = <T>(preset: T[]) => {
    const [originalList] = useState(preset);
    const [filtered, setFiltered] = useState(preset);

    const filterByCriteria = (letter: string, criteria: (subject: T) => string) => {

        const filt = letter !== ""? originalList.filter(c => RegExp(`^${letter}`)
        .test(criteria(c))): originalList
        
        setFiltered(filt)
        return filt;
    }

    return { filtered, setFiltered, filterByCriteria, originalList};
}