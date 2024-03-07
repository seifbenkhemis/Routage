import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { Spinner } from "react-bootstrap";
import Home from "./components/Home";
import{Notfound} from "./components/Notfound";
const Events = React.lazy(() => import("./components/Events"));
const EventDetails = React.lazy(() => import("./components/EventDetails"));

function App() {
	return (
		<>
			<Suspense
				fallback={
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				}
			>
				<NavigationBar />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/events">
						<Route index element={<Events/>} />{" "}
						<Route path=":name" element={<EventDetails/>} />
					</Route>

					<Route path="*" element={<Notfound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
