import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {

    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDinners(data);
            });
    }, [])

    return (
        <>
            <Box id="dinners" className="gp-padding" sx={{ flexGrow: 1 }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        dinners.map(dinner => <Dinner
                            key={dinner.id}
                            dinner={dinner}
                        ></Dinner>)
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Dinners;