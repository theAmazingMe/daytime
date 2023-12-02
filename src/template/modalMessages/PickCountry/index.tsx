import { Template } from "./template";

export const PickCountry = ({country} : any) => {
	return <Template prefix="mod-pick-ctry" country={country} />;
};