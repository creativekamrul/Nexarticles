import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {

    },
    media: {
        height: 280,
    },
});
const BlogElement = ({bdata}) => {
    const {title, excerpt, id, jetpack_featured_media_url} = bdata
    const classes = useStyles();

    return(
        <Grid item xs={4}>
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={jetpack_featured_media_url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title.rendered}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span dangerouslySetInnerHTML={{__html:excerpt.rendered}} />
                    </Typography>
                </CardContent>
            <CardActions>

                    <Link to={`/posts/${id}`}>
                        <Button variant="contained" color="primary">
                        Read more
                        </Button>
                    </Link>

            </CardActions>
        </Card>
        </Grid>
    )
}
export default BlogElement