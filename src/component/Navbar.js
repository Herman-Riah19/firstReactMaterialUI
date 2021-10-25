import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        Try-in
                    </Typography>
                    <Button variant="outlined" color="inherit" sx={{mr: 1}}>Login</Button>
                    <Button variant="outlined" color="inherit" sx={{mr: 1}}>Sing in</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
