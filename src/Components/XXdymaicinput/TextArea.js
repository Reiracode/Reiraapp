import React from 'react';

const TextArea = ({ name, placeholder, require, _handleChange }) => (
    <div>
        <textarea
            type="text"
            name={name}
            require={require}
            style={{ height:"80px" }}
            autoComplete="off"
            placeholder={placeholder}
            onChange={_handleChange}
        />
    </div>
);

export default TextArea;