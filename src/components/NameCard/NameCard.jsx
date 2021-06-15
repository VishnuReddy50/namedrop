import React from 'react';
import './NameCard.css';

function NameCard(props) {

	const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

	return (
		<a className="card-link" href={`${nameCheapUrl}${props.suggestedName}`}>
			<div className="result-name-card">
				<p className="result-name">
					{props.suggestedName}
				</p>
			</div>
		</a>
	)

}

export default NameCard;
