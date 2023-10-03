import { Template } from "./template";

export const AlphabetPageItems = ({alphabet, children} : any) => {
	return <Template prefix="alpha-item" alphabet={alphabet} >
		{children}
	</Template>;
};