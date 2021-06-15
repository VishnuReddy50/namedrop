import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
	return (
		<div className="search-container">
			<input
				onChange={(event) => props.handleChange(event.target.value)}
				placeholder="Type keywords"
				className="search-input"
			/>
		</div>
	);
}
export default SearchBox;