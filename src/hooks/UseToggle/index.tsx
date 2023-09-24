import { useState } from "react";

export const useToggle = (intialValue = false) => {
	const [state, setState] = useState(intialValue);

	const toggle = () => {
		setState((previous) => !previous);
	};

	return {
		state,
		toggle,
	};
};
