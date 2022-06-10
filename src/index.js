import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "./css/index.css";

import { Newest } from "./Newest";

import { MostPopular } from "./MostPopular";

import { YourProfile } from "./YourProfile";

import { Add } from "./Add";

import { Upvoter } from "./Upvoter";

import { Settings } from "./Settings";

import { People } from "./People";

import { PeopleOldest } from "./PeopleOldest";

import { Tip } from "./Tip";

import { TipOldest } from "./TipOldest";

import { TipHighest } from "./TipHighest";

import { Info } from "./Info";

const app = document.getElementById("app");
ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Newest />} />

			<Route path="/most-popular" element={<MostPopular />} />

			<Route path="/your-profile" element={<YourProfile />} />

			<Route path="/add" element={<Add />} />

			<Route path="/upvoter" element={<Upvoter />} />

			<Route path="/settings" element={<Settings />} />

			<Route path="/people" element={<People />} />

			<Route path="/people-oldest" element={<PeopleOldest />} />

			<Route path="/tip" element={<Tip />} />

			<Route path="/tip-oldest" element={<TipOldest />} />

			<Route path="/tip-highest" element={<TipHighest />} />

			<Route path="/info" element={<Info />} />
		</Routes>
	</BrowserRouter>,
	app);