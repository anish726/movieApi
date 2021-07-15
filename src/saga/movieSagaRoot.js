import {all} from 'redux-saga/effects';
import watchMovie, { watchMovieAdd } from './MovieApiSaga';

function* rootSaga(){
    console.log("hello saga")
    yield all([watchMovie(),watchMovieAdd()])
}

 export default rootSaga