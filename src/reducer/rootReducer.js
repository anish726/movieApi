

import {combineReducers} from 'redux';
import movieList from './index'
import movieStorage from './MovieUseractionReducer'

const rootReducer = combineReducers({
    
 movieList:movieList,
 movieStorage:movieStorage
  
    
})
 export default rootReducer;