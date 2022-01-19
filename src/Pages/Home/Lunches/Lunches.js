import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {
    const [lunches, setLunches] = useState([]);

    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLunches(data);
            });
    }, [])

    return (
        <>
            <Box id="lunches" className="gp-padding" sx={{ flexGrow: 1 }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        lunches.map(lunch => <Lunch
                            key={lunch.id}
                            lunch={lunch}
                        ></Lunch>)
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Lunches;