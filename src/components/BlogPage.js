import React, {useEffect} from "react";
import {Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import BlogElement from "./BlogElement";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllBlogAsync,
    selectAllBlogs,
    selectStatus
} from "../redux/blog/BlogSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
    hero:{
        backgroundImage:`linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5)),
        url('https://images.unsplash.com/photo-1501822810445-bba370e517ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
        height:'70vh',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        fontSize:'4rem',
        fontFamily:'roboto'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const BlogPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllBlogAsync())
    },[dispatch])
    const allBlogs = useSelector(selectAllBlogs)
    const status = useSelector(selectStatus)
    if (status==="loading"){
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        )
    } else if (status==="failed"){
        return (
            <h1>There was an error</h1>
        )
    } else {
        return (
            <div>
                <Box className={classes.hero}>
                    <Box>Nexarticles</Box>
                </Box>
                <div id="blog_grid" className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            allBlogs.map((blogData) => {
                                return (
                                    <BlogElement key={blogData.id} bdata={blogData}/>
                                )
                            })
                        }
                    </Grid>
                </div>

            </div>
        )
    }
}
export default BlogPage