import React from 'react'
import { Box, Grid } from '@mui/material'


function Footer() {
  return (
    <>  
        <Box sx={{ height:"600px",color:"#fff" , marginTop:'200px'}}>
            <Box sx={{height:"300px" , backgroundColor: "#000000",textAlign:'center' }}>
                <h2 style={{color : '#fff', fontWeight :'Normal' , padding:'4%'}}>
                    Subscribe to The H4RMIN News
                </h2>
                <p>
                    Engaging copy for member subscription with the CTA to enter emailand subscribe
                </p>
                <Box>
                    <input style={{width:"20%" , padding:'8px' , backgroundColor:'black' , border:'2px solid white'}} type="text" id="fname" placeholder='Your Email' name="fname"/>
                    <input style={{width:"8%" , padding:'9px' , fontWeight:'bold'}} type="submit" value="SUBSCRIBE"/>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={6}>
                    <Grid item  xs={3} sx={{color:'black'}}>
                        <img
                        src= {require('../../img/image-removebg-preview.png')}
                        alt="news logo"
                        style={{ marginLeft:"15%", marginTop: "10%" , width:"15%" }}
                        />
                        <Box sx={{marginLeft:"15%" , fontSize:"15px"}}>
                            <p>
                                The h4rmin Produces innovative and essential investigative journalism,opinion and analysis.
                                Our mission : Truth above all. The world's best reporting.
                                <br/>
                                <br/>
                                +1-613-555-0107 <br/>
                                info@theh4rmin.org
                            </p>
                            <p style={{color:'grey'}}>
                                <br/>
                                <br/>

                                2023 The H4RMIN - All Rights Reserved
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sx={{marginLeft:'30%' ,color:'black'}}>
                        <h3>Category</h3>
                        <ul style = {{style:'none'}} >
                            <li>Business</li>
                            <li>Entertainment</li>
                            <li>General</li>
                            <li>Health</li>
                            <li>Science</li>
                            <li>Sports</li>
                            <li>Technology</li>
                        </ul>
                    </Grid>
                </Grid>
            </Box>
        </Box>  
    </>
  )
}

export default Footer