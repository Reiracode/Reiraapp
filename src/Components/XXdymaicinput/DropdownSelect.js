import React from 'react';

const DropdownSelect = ({ name, placeholder, required, val, _handleChange }) => (
    <div>
        <label>{placeholder}</label>
        <select className={name} required={required} onChange={_handleChange}>
            <option value=''>select an option</option>
            {/* <option value='1'>1</option>
            <option value='2'> 2</option> */}
            {val.map(values => <option value={values} key={values}>{values}</option>)}
        </select>
    </div>
);

export default DropdownSelect;