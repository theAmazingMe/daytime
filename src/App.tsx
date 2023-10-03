import React, { createContext, useState } from "react";
import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NavBar } from "./pages/template/navbar";
import { AppContextType } from "./resources/types";
import { NotFound } from "./pages/404";
import { CookiesProvider } from "react-cookie";
import { COOKIES_KEY } from "./resources/constants";
import { useNightShiftAndCookies } from "mazeof-react/dist/hooks";
import { Greetings } from "./pages/greetings";
import { Login } from "./pages/Login";
import { ModalConfirmation } from "./template/ModalConfirmation";
export const AppContext = createContext<AppContextType | null>(null);

function App() {
	
	const nightShift = useNightShiftAndCookies(COOKIES_KEY);
	const { themes } = {...nightShift};
	const [shoModal, setShowModal] = useState(false);

	return (
		<AppContext.Provider value={{ ...nightShift, shoModal, setShowModal }}>
			<CookiesProvider>
				<div className={`App page-feat page-${themes.theme}`}>
					<ModalConfirmation></ModalConfirmation>
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
