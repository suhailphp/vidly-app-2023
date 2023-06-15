import React, { Component } from 'react';
import _ from 'lodash'

class TableBody extends Component {
    renderContent =(item,column)=>{
      if(column.link){
        return column.link(item)
      }
      else if(column.path){
        return _.get(item,column.path)
      }
      else{
        return column.content(item)
      }
    }
    render() { 
        const {data,columns} = this.props
        return (
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item._id}>
                    {columns.map(column=>(
                        <td key={item._id+(column.path||column.key)}>
                            {
                              //column.path?_.get(item,column.path):column.content(item)
                              this.renderContent(item,column)
                            }
                        </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
        );
    }
}
 
export default TableBody;