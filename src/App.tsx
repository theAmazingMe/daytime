import React, { createContext, useState } from "react";
import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { THEME_DARK } from "./resources/constants";
import { NavBar } from "./pages/template/navbar";
import { AppContextType } from "./resources/types";
import { NotFound } from "./pages/404";

export const AppContext = createContext<AppContextType | null>(null);

function App() {
	const [theme, setTheme] = useState(THEME_DARK);

	return (
		<AppContext.Provider value={{ theme, setTheme }}>
			<div className={`App page-${theme}`}>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home></Home>} />
						<Route path="home" element={<Home></Home>} />
						<Route path="login" element={<Login></Login>} />
						<Route path="*" element={<NotFound></NotFound>} />
					</Routes>
				</Router>
			</div>
		</AppContext.Provider>
	);
}

export default App;
