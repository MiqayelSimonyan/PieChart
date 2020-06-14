import React from 'react';
import { Link } from 'react-router-dom';

import pageNotFound from 'assets/images/404.gif';

import 'assets/styles/page-not-found.scss';

const PageNotFound = () => {
	return (
		<div className="container not_found_wrap">
			<div className="row justify-content-center align-items-center">
				<div className="col-md-12">
					<img className="mb-5" src={pageNotFound} alt="unknown page" title="notFound" />				
					<br />
					<Link to="/">Return To Homepage</Link>
				</div>
			</div>
		</div>
	)
}

export default PageNotFound;