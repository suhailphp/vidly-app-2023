import _ from 'lodash'
const Pagination = ({currentPage,pageSize,itemCount,onPageChange}) => {
    let pageCount = Math.ceil(itemCount/pageSize)
    let pages = _.range(1,pageCount+1)

    if(pageCount === 1) return null
    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={currentPage === 1?'page-item disabled':'page-item'} >
                    <a className="page-link" href="#/" onClick={()=>onPageChange(currentPage -1)}>Previous</a>
                </li>
                {pages.map(page=>(
                    <li key={page}  className="page-item">
                        <a className={(currentPage === page)?"page-link active":"page-link "}href="#/" onClick={()=>onPageChange(page)} >{page}</a>
                    </li>
                ))}
                <li className={currentPage >= pageCount?'page-item disabled':'page-item'}>
                    <a className="page-link" onClick={()=>onPageChange(currentPage +1)} href="#/">Next</a>
                </li>

            </ul>   
        </nav>
     );
}
 
export default Pagination;