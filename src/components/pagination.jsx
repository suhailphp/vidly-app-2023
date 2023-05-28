import _ from 'lodash'
const Pagination = ({currentPage,pageSize,itemCount,onPageChange}) => {
    let pageCount = Math.ceil(itemCount/pageSize)
    let pages = _.range(1,pageCount+1)
    if(pageCount === 1) return null
    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                
                {pages.map(page=>(
                    <li key={page}  className="page-item"><a className={(currentPage === page)?"page-link active":"page-link "}href="#/" onClick={()=>onPageChange(page)} >{page}</a></li>
                ))}

            </ul>   
        </nav>
     );
}
 
export default Pagination;