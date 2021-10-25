import React, {useState, useEffect } from 'react'
import {Box, Typography} from '@mui/material'
import { getUsers } from '../service/UserService';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        getUsers().then((res) => setUsers(res.data));
    }, []);

    return (
        <Box>
            {users.map(user => (
                <Box>
                    <Typography variant='h2'>{user.name}</Typography>
                    <Typography variant='h3'>{user.firstname}</Typography>
                    <Typography variant='h3'>{user.birth}</Typography>
                </Box>
            ))}
            
        </Box>
    )
}

export default HomePage
