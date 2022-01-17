import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState();

    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data));
    }, [])

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        breakfasts.map(breakfast => <Breakfast
                            key={breakfast.id}
                            breakfast={breakfast}
                        ></Breakfast>)
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Breakfasts;