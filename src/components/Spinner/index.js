import React from 'react';
import PropTypes from "prop-types";
import './styles.css';

const Spinner = ({ text }) => (
    <div className="spinner-overlay gap-3">
        <div className="spinner-container" />
        {!text ? null : <h5>{text}</h5>}
    </div>
);


Spinner.propTypes = {
    text: PropTypes.string,
};

Spinner.defaultProps = {
    text: 'mohon tunggu sebentar ...',
};


export default Spinner;