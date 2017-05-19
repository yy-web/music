export function fetchData(url,fn){
    return function (dispatch){
        fetch(url)
            .then(function(res){
                return res.json()
            }).then(function(data){
                dispatch(fn(data.result))
            })
    }
}
