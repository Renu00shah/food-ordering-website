import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import Dosa from '../img/dosa.jpg'
import Burger from '../img/burger.jpg'
import Chowmin from '../img/Chicken-Chow-Mein-13.jpg'
import Roll from '../img/Veg-Spring-Rolls-3.jpg'
import Pizza from '../img/pizza.jpg'


const Header = () => {
    const items = [
        {
            name: "Pizza",
            price: "$100",
            description: 'A delicious pizza',
            image:Pizza
        },
        {
           name: "Burger",
            price: "$50",
            description: 'A delicious burger',
            image:Burger
        },
        {
            name: "Chowmin",
            price: "$80",
            description: 'A delicious chowmin',
            image:Chowmin
        },
        {
            name: "Dosa",
            price: "$100",
            description: 'A delicious dosa',
            image:Dosa
        },
        {
            name: "Spring Roll",
            price: "$60",
            description: 'A delicious roll',
            image:Roll
        }
]



     const styles = {
    navbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100px",
      border: "2px solid black",
      backgroundColor: "black",
      color: "white",
      boxShadow:"5px 5px 5px black",

    }
  }
  return (
      <>
      <Box sx={styles.navbar}>
        <Box>
        <Typography sx={{fontSize:'40px'}}>Renu's Cafe</Typography>
        </Box>

        <Box>
          <ul style={{
            display: 'flex', flexDirection: "row"}}>
            <li style={{margin:'30px',fontSize:'40px',listStyle:'none',cursor:"pointer",}}>Home</li>
            <li style={{margin:'30px',fontSize:'40px',listStyle:'none',cursor:"pointer"}}>Cart</li>
          </ul>
        </Box>
          </Box>
          

          <Box>
              {items.map((item, index) => {
                  return (
                     <Box key={index} sx={{display:"flex",flexDirection:"column"
                     }}>
                          <img src={item.image} alt={item.name} style={{width:'200px',height:'200px'}}/>
                          <Typography sx={{fontSize:'30px'}}>{item.name}</Typography>
                          <Typography sx={{ fontSize: '25px' }}>{item.price}</Typography>
                          <Typography sx={{ fontSize: "20px" }}>{item.description}</Typography>
                          <Button sx={{height:'40px',width:"100px",bgcolor:'blue',color:'black',fontSize:'10px'}} variant="text">Add To Cart</Button>

                              </Box>   
                  )
              })}
              
          </Box> 
    </>
  )
}

export default Header