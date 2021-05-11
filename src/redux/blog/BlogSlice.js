import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAllBlogAsync = createAsyncThunk(
    'blogs/getAllBlogAsync',
    async () => {
        const response = await fetch('http://webgaladigital.com/wp-json/wp/v2/posts?per_page=50')
        if (response.ok){
            const Blogs = await response.json()
            return [...Blogs]
        }else {
            console.log(response)
        }
    }
)
export const getSinglePostImageAsync = createAsyncThunk(
    'blogs/getSinglePostImageAsync',
    async (mediaID) => {
        const response = await fetch(`http://webgaladigital.com/wp-json/wp/v2/media/${mediaID}`)
        if (response.ok){
            const singlePostImage = await response.json()
            return {singlePostImage}
        }
    }
)
export const getSinglePostAsync = createAsyncThunk(
    'blogs/getSinglePostAsync',
    async (postID) => {
        const response = await fetch(`http://webgaladigital.com/wp-json/wp/v2/posts/${postID}`)
        if (response.ok){
            const singlePostData = await response.json()
            return {singlePostData}
        }else {
            return {}
        }
    }
)
 const BlogSlice = createSlice({
     name:"Blogs",
     initialState:{
         allBlogs:[],
         status:null,
         singlePostData:{}
     },
     reducers:{

     },
     extraReducers:{
        [getAllBlogAsync.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllBlogAsync.rejected]: (state) => {
            state.status = 'failed'
        },
        [getAllBlogAsync.fulfilled]: (state, {payload}) => {
            state.allBlogs = payload
            state.status = 'success'
        },
        [getSinglePostImageAsync.pending]: (state) => {
            state.status = 'loading'
        },
        [getSinglePostImageAsync.rejected]: (state) => {
            state.status = 'failed'
        },
        [getSinglePostImageAsync.fulfilled]: (state, {payload}) => {
            state.status = 'success'
            return payload
        },
        [getSinglePostAsync.pending]: (state) => {
            state.status = 'loading'
        },
        [getSinglePostAsync.rejected]: (state) => {
            state.status = 'failed'
            state.singlePostData = {}
        },
        [getSinglePostAsync.fulfilled]: (state, {payload}) => {
            state.status = 'success'
            state.singlePostData = payload
        },
     }
 })
export const selectAllBlogs = (state) => state.Blogs.allBlogs
export const selectSinglePostData = (state) => state.Blogs.singlePostData
export const selectStatus = (state) => state.Blogs.status
export const {reducer1} = BlogSlice.actions
export default BlogSlice.reducer