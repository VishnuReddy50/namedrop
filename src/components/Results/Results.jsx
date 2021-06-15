import React from 'react';
import NameCard from '../NameCard/NameCard';
import './Results.css';

function Results(props) {

	const suggestedNamesJsx = props.suggestedNames.map((suggestedName) => {
		return <NameCard
			key={suggestedName}
			suggestedName={suggestedName}
		/>;
	});

	return (
		<div className="results-container">
			{suggestedNamesJsx}
		</div>
	)

}

export default Results;
