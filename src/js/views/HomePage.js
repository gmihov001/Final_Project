import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const HomePage = () => (
	<div className="wrapper">
		<div className="container-fluid d-flex justify-content-between">
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<Link to="/">
				<button className="navbar-signup btn text-danger ">Sign Out</button>
			</Link>
		</div>
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-3 px-0">
					<img
						src="https://cdn2.vectorstock.com/i/1000x1000/72/96/emotion-avatar-man-happy-successful-face-vector-13577296.jpg"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col text-center">
					<h5 className="text-center py-2 px-3">Personal Information</h5>
					<h5 className="text-center py-2 px-3">Passport Number</h5>
					<h5 className="text-center py-2 px-3">Passport expiration date</h5>
				</div>
				<div className="col text-center">
					<h5 className="text-center py-2 px-3">Emergency Contacts</h5>
					<h5 className="text-center py-2 px-3">Contact 1</h5>
					<h5 className="text-center py-2 px-3">Contact 2</h5>
				</div>
			</div>

			<Navbar2 />
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex justify-content-between">
					<h4 className="pageEntry">Travel Tip 1</h4>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex justify-content-between">
					<h4 className="pageEntry">Travel Tip 2</h4>
				</div>
			</div>
		</div>
	</div>
);
