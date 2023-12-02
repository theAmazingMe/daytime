import React, { createContext, useContext, useState } from "react";
import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NavBar } from "./pages/template/navbar";
import { AppContextType, GreetingsInCountry } from "./resources/types";
import { NotFound } from "./pages/404";
import { CookiesProvider } from "react-cookie";
import { COOKIES_KEY } from "./resources/constants";
import { useNightShiftAndCookies } from "mazeof-react/dist/hooks";
import { Greetings } from "./pages/greetings";
import { Login } from "./pages/Login";
import { UseModal } from "./ModalPack/hooks/UseModal";

import "./theme.scss";
import "./dark.scss";
import { ModalConfirmation } from "./ModalPack/modalConfirmationComponent";

export const AppContext = createContext<AppContextType | null>(null);

function App() {

	const defaultGreetings:GreetingsInCountry[] = [];
	const nightShift = useNightShiftAndCookies(COOKIES_KEY);
	const [greetings,setGreetings] = useState(defaultGreetings)
	const { themes } = { ...nightShift };

	const modal = UseModal()

	const customContext = { ...nightShift, ...modal , greetings,setGreetings}
	return (
		<AppContext.Provider value={customContext}>
			<CookiesProvider>
				<div className={`App page-feat page-${themes.theme}`}>
					<ModalConfirmation customContext={customContext}></ModalConfirmation>
					<Router>
						<NavBar />
						<Routes>
							<Route path="/" element={<Home></Home>} />
							<Route path="home" element={<Home></Home>} />
							<Route path="login" element={<Login></Login>} />
							<Route path="greetings" element={<Greetings></Greetings>} />
							<Route path="*" element={<NotFound></NotFound>} />
						</Routes>
					</Router>
				</div>
			</CookiesProvider>
		</AppContext.Provider>
	);
}

export default App;
