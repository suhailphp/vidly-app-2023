import _ from 'lodash'
const Pagination = ({pageNumber,pageLength,dataCount}) => {
    let pageCount = Math.ceil(dataCount/pageLength)
    let pages = _.range(1,pageCount+1)
    if(pageCount === 1) return null
    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {pages.map(page=>(
                    <li key={page} className="page-item"><a className="page-link" href="#">{page}</a></li>
                ))}
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>   
        </nav>
     );
}
 
export default Pagination;