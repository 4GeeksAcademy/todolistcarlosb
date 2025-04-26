import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<form>
				<div className="row mb-3">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
						<input type="email" className="form-control" id="inputEmail3" />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
					<div className="col-sm-10">
						<input type="password" className="form-control" id="inputPassword3" />
					</div>
				</div>
				
				<button type="submit" className="btn btn-primary">Sign in</button>
			</form>



		</div>
	);
};

export default Home;