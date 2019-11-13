export const loadBooks = () => {
    return (dispatch) => {
        fetch('https://bookreviews-api.herokuapp.com/api/Books')
        .then(response => response.json())
        .then(data => {
            dispatch({type:'LOAD_BOOKS',payload: data})
        })
    }
}