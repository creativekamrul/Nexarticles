import {configureStore} from "@reduxjs/toolkit";
import blogReducer from './blog/BlogSlice'
export default configureStore({
    reducer:{
    Blogs:blogReducer
    }
})