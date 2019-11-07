import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const HomePage = () => (
	<div className="wrapper">
		<Navbar2 />
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-3 px-0">
					<img
						src="https://cdn2.vectorstock.com/i/1000x1000/72/96/emotion-avatar-man-happy-successful-face-vector-13577296.jpg"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col text-left">
					<p className="text py-2 px-3">
						Passport Number: <strong>234987456</strong>
					</p>
					<p className="text py-2 px-3">
						Passport expiration date: <strong>20 Oct 2030</strong>
					</p>
					<Link to="/EmergContacts">
						<p className="text py-2 px-3">
							<strong className="text">Emergency Contacts</strong>
						</p>
					</Link>
					<Link to="/">
						<button type="button" className="logout btn ml-3 ">
							Log Out
						</button>
					</Link>
				</div>
			</div>

			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Travel Tips</h1>
				</div>
			</div>

			<div className="card-deck mb-5">
				<div className="card">
					<img
						src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						className="card-img-top img-fluid"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">
							<strong>Visit the touristy stuff in a city</strong>
						</h5>
						<p className="card-text">
							The main tourist attractions are popular for a reason. While getting off the beaten track
							can be fun, the things you’ll see are rarely as impressive as the popular sights. Don’t be a
							travel snob — hit up the famous stops as well as the lesser-visited stuff.
						</p>
					</div>
					<div className="card-footer">
						<a
							className="text-muted"
							href="https://www.neverendingfootsteps.com/100-best-travel-tips/"
							target="_blank"
							rel="noopener noreferrer">
							Read more about this travel tip...
						</a>
					</div>
				</div>
				<div className="card">
					<img
						src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						className="card-img-top img-fluid"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">
							<strong>The Ultimate Packing Guide for Travel Photographers</strong>
						</h5>
						<p className="card-text">
							Working as professional photographer for the past 12 years, I’ve come up with the ultimate
							kit for travel photography. This travel photography packing list includes all of the gear
							you’ll need and the best camera backpacks for travel photographers. Here’s how to pack like
							a pro!
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://ordinarytraveler.com/travel-photographer-packing-list"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted">
							Read more about this travel tip...
						</a>
					</div>
				</div>
				<div className="card">
					<img
						src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						className="card-img-top img-fluid"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">
							<strong>10 Best Tips for Traveling Europe (Everything You Need To Know)</strong>
						</h5>
						<p className="card-text">
							After traveling to Europe for the past 20 years, I’ve learned all of the best tips and
							tricks. These Europe travel tips cover everything you NEED to know!
						</p>
					</div>
					<div className="card-footer">
						<a
							className="text-muted"
							href="https://ordinarytraveler.com/europe-travel-tips"
							target="_blank"
							rel="noopener noreferrer">
							Read more about this travel tip...
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
