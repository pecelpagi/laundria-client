import React from 'react';

import './styles.css';

const Spinner = ({ text = 'mohon tunggu sebentar ...' }) => (
    <div className="spinner-overlay gap-3">
        <div className="spinner-container" />
        {!text ? null : <h5>{text}</h5>}
    </div>
);

export default Spinner;