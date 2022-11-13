import React from "react";
import TopBar from "../../components/topbar/topBar";
import Header from "../../components/header/header";
import Post from "../../components/post/post";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import Image from "../../image/test.jpg";
import Image2 from "../../image/test2.jpg";
import Image3 from "../../image/test3.jpg";
import Image4 from "../../image/test4.jpg";



const Religion = () => {
  return (
    <>
    <Header />
    <Typography variant="h2" justifyContent='center' textAlign='center' mt={15}>Religious Truth</Typography>
    <Container maxWidth="xl" sx={{marginTop:'20px', marginBottom:'50px'}}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
            <CardMedia component="img" height='250' image={Image2} style={{padding:'5px',paddingRight:'5px'}} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
 


            <CardActions>
                <Stack direction='row'  ><Button variant="outlined" >See More</Button></Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image3} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
             
 

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           
            <CardContent>
              <CardMedia component="img" height='250' image={Image4} />
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image2} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image3} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image4} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image2} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
              <CardMedia component="img" height='250' image={Image3} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
          

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image4} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image2} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image={Image3} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
            <CardMedia component="img" height='250' image={Image4} />
            <CardContent>
              
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                hic perspiciatis earum? Sunt repellendus ea ex quaerat saepe
                suscipit itaque aut. Minima ullam, velit fugiat inventore alias
                vero sapiente voluptate!
              </Typography>
            </CardContent>
            
            

            <CardActions>
                <Button variant="outlined">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        
      </Grid>
      
    </Container>
    </>
  );
};

export default Religion;
