import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const styles={
        footer: {
            padding: '30px',
            backgroundColor: "black",
            marginTop: "500px",
            color: "white",
            textAlign: 'center',
            
        }
    }
    return (
        <>
        
            <Box sx={styles.footer}>
                <Typography sx={{fontSize:"30px"}}>All Rights Reserved &copy; Renu Shah </Typography>
        </Box>
        
        </>
  )
}

export default Footer