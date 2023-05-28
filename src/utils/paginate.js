import _ from 'lodash';

export function paginate(items,pageNumber,pageSize){
    const startIndesx = (pageNumber-1)*pageSize
    return _(items).slice(startIndesx).take(pageSize).value();
}