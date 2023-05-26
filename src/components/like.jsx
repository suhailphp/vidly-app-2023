const Like = ({liked = false,onClick}) => {
    if(liked)
        return <i className="fa fa-heart" onClick={onClick} aria-hidden="true"></i>
    else
        return <i className="fa fa-heart-o" onClick={onClick}  aria-hidden="true"></i>

}
 
export default Like;