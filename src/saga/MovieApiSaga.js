

import {put, takeEvery, call} from 'redux-saga/effects';
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";



 async function fetchApi(){
    return fetch(APIURL)
    .then(response => response.json())
    .catch(error => {throw error})
}

  
function* fetchDataGet(){
    try {
          const movie  = yield call(fetchApi);
          yield put({type:'MOVIE_SUCCESS',movie:movie}) 
          console.log(movie,'fetch api saga************')
    } 
    catch (e) {
        yield put({type:'MOVIE_ERROR',movieError:e.movieError})
        
    }
}
  
function* onAdd(movie){
    yield put({type:'ADD_MOVIE_SAGA',movie:movie})
}

 export function* watchMovieAdd(){
      yield takeEvery('ADD_MOVIE',onAdd)
  }

   function* watchMovie(){
       yield  takeEvery('MOVIE_REQUEST', fetchDataGet)

   }
     export default watchMovie