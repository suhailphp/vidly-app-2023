import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends Component {
    render() { 
        return (
            <table className="table">
                <TableHeader
                    onSort={this.props.onSort}
                    sortColumn={this.props.sortColumn}
                    columns={this.props.columns}
                ></TableHeader>
                <TableBody
                    data={this.props.data}
                    columns={this.props.columns}
                ></TableBody>
          </table>
        );
    }
}
 
export default Table;