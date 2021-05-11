import React, {useEffect} from "react";
import {Box} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {
    getSinglePostAsync,
    selectSinglePostData,
    selectStatus
} from "../redux/blog/BlogSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

var mediaUrl = ''
const useStyles = makeStyles(() => ({
    hero:{
        backgroundImage:`linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0,0.4)),
        url(${mediaUrl})`,
        height:'80vh',
        padding:'5rem',
        textAlign:'center',
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
    title:{
        fontSize:'2.5rem',
        textAlign:'left !importent'
    },
    body_text:{
        fontSize:'1.5rem'
    },
}));
const SingleBlogPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSinglePostAsync(id))
    },[dispatch,id])
    const classes = useStyles();
    const singlePostData = useSelector(selectSinglePostData)
    const status = useSelector(selectStatus)
    if (status==="loading"){
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        )
    } else if (status==="failed" || !singlePostData){
        return (
            <h1>There was an error</h1>
        )
    } else if (singlePostData.singlePostData){

    const {title, content, jetpack_featured_media_url, date} = singlePostData.singlePostData;
    var newDate = date.substring(0, 10)
        newDate = newDate.replace('-','/')
        newDate = newDate.replace('-','/')

        return(
            <div>
                <Box className={classes.hero} style={{backgroundImage:`linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5)),
                url(${jetpack_featured_media_url})`}}>

                </Box>
                <div className="single_page_content">
                    <CssBaseline />

                        <Typography className={classes.title} component="h1" >
                            {title.rendered}
                        </Typography>
                        <Typography className={classes.date}>
                            <span>Published: {newDate}</span>
                        </Typography>
                        <Typography style={{marginTop:'5rem'}} className={classes.body_text} component="div" >
                            <div dangerouslySetInnerHTML={{__html:content.rendered}}/>
                        </Typography>

                </div>
            </div>
        )
    } else{
        return (
            <div className="loading">
                <h1>Opps! The link is wrong</h1>
                <Button variant="contained" color="primary" href='/'>
                    Home
                </Button>
            </div>
        )
    }

}
export default SingleBlogPage