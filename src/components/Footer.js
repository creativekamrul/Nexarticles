import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar style={{justifyContent:'center'}}>
                    <Typography variant="body1" color="inherit">
                        © 2021 | Kamrul Islam
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Footer