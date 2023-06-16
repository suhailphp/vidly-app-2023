import React from 'react';
const Input = ({name,id='',label,type='text',onChange}) => {
    id = (id)?id:name
    return ( 
        <div className="mb-1">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} onChange={onchange} name={name} id={id} className="form-control" />
        </div>
     );
}
export default Input;