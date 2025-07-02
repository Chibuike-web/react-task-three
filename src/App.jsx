import "./globals.css";
import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";
import PersonalInfo from "./pages/PersonalInfo";
import Address from "./pages/Address";
import Dashboard from "./pages/dashboard/Dashboard";
import Index from "./pages/dashboard/Index";
import Product from "./pages/dashboard/Product";
import Customers from "./pages/dashboard/Customers";
import Income from "./pages/dashboard/Income";
import Promote from "./pages/dashboard/Promote";
import Help from "./pages/dashboard/Help";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/success" element={<Success />} />
			<Route path="/personal-info" element={<PersonalInfo />} />
			<Route path="/address" element={<Address />} />
			<Route path="/dashboard" element={<Dashboard />}>
				<Route index element={<Index />} />
				<Route path="product" element={<Product />} />
				<Route path="customers" element={<Customers />} />
				<Route path="income" element={<Income />} />
				<Route path="promote" element={<Promote />} />
				<Route path="help" element={<Help />} />
			</Route>
		</Routes>
	);
}
