import { useState } from "react"

export const useYearBusinessLogic = () => {
    const [currentOffsetYear, setCurrentOffsetYear] = useState(0);

    const handleBackYear = () => {
        setCurrentOffsetYear(currentOffsetYear - 1);
    }

    const handleNextYear = () => {
        setCurrentOffsetYear(currentOffsetYear + 1);
    }

    return {
        currentOffsetYear,
        onBackYear: handleBackYear,
        onNextYear: handleNextYear,
    }
}