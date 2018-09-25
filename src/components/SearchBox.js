import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 br2 ba b--light-blue bg-light-gray"
				type="search" 
				placeholder="Search robots" 
				onChange={searchChange}
			/>
		</div>
		
	);
}

export default SearchBox;