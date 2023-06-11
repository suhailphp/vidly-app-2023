import React, { Component } from 'react';

class TableHeader extends Component {
    raiseSort = path =>{
      let {sortColumn,onSort} = this.props
      let order = (sortColumn.order === 'asc' && sortColumn.path === path)?'desc':'asc'
      sortColumn = {path,order}
      onSort(sortColumn)
    }

    render() { 
        return (
            <thead>
              <tr>
                {this.props.columns.map(column=>(
                    <th key={column.path||column.key} onClick={()=>this.raiseSort(column.path)} scope="col" style={{cursor:'pointer'}}>{column.label}</th>
                ))}
              
              </tr>
            </thead>
        );
    }
}
 
export default TableHeader;

