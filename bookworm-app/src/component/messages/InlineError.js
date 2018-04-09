import React from 'react';
import PropTypes from 'prop-types';


const InlieError = ({text}) => <span style = {{color:"#ae5658"}}>{text}</span>;

InlieError.propTypes = {
	text: PropTypes.string.isRequired
};



export default InlieError;
