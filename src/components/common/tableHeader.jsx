import React, { Component } from 'react';


class TableHeader extends Component {
    raiseSort = path =>{
      let {sortColumn,onSort} = this.props
      let order = (sortColumn.order === 'asc' && sortColumn.path === path)?'desc':'asc'
      sortColumn = {path,order}
      onSort(sortColumn)
    }
    renderSortColumn = column =>{
        let {sortColumn} = this.props
        if(column.path !== sortColumn.path) return null
        return (sortColumn.order === 'asc')? <i className="fa fa-sort-asc m-2"></i> : <i className="fa fa-sort-desc m-2"></i>
    }
    render() { 
        return (
            <thead>
              <tr>
                {this.props.columns.map(column=>(
                    <th key={column.path||column.key} onClick={()=>this.raiseSort(column.path)} scope="col" style={{cursor:'pointer'}}>
                        {column.label}
                        {this.renderSortColumn(column)}
                    </th>
                ))}
              </tr>
            </thead>
        );
    }
}
export default TableHeader;

