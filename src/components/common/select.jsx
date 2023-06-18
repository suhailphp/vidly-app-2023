import React from 'react';
const Select = ({name,id='',label,value,options,error,onChange}) => {
    id = (id)?id:name
    return ( 
        <div className="mb-1">
            <label htmlFor={id} className="form-label">{label}</label>
            <select className="form-select" name={name} id={id} onChange={onChange} value={value} >
                <option value='' key='default' >Please Select one</option>
                {options.map(op=>(<option key={op.genreID} value={op.genreID} >{op.name}</option>))}
            </select>
            {(error)?<div className="alert alert-danger" >{error}</div>:''}
        </div>
     );
}
export default Select;