import {
    Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography
} from "@mui/material";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Regligion() {
    return (
         <>
        
            <div className='header'>
      <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>
        <div>
          <img className="headerImg" src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_960_720.jpg" alt="logo" />
        </div>
        <div>
          <img className="headerImg" src="https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_960_720.jpg" alt="logo" />
        </div>
        <div>
          <img className="headerImg" src="https://cdn.pixabay.com/photo/2019/07/30/08/44/mosque-4372296_960_720.jpg" alt="logo" />
        </div>
      </Carousel>
    </div>
        
    <Typography variant="h2" justifyContent='center' textAlign='center' >Islamic Faith</Typography>
    <Container maxWidth="xl" sx={{marginTop:'20px', marginBottom:'50px'}}>
      <Grid container spacing={5}>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
            <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2019/11/05/20/36/travel-4604499_960_720.jpg' style={{padding:'5px',paddingRight:'5px'}} />
            <CardContent>
              
              <Typography variant="h6" fontWeight={800}>የድንግል መውለድ</Typography>
              <Typography
                variant="body1"
                fontWeight={500}
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                የድንግል መውለድ መሠረተ እምነት በጣም አስፈላጊ ነው (ኢሳይያስ 7፡14፤ ማቲዎስ 1፡23፤ ሉቃስ 1፡27፣ 34)። በቅድሚያ ቃሉ ሁነቱን እንዴት እንደሚገልጸው እንመልከት። የማርያም ምላሽ የሆነውን ጥያቄ ስንመለከት፣ “ይህ እንዴት ሊሆን ይችላል?” (ሉቃስ 1፡34)፣ ገብርኤል ሲመልስ፣ “መንፈስ ቅዱስ ባንቺ ላይ ይመጣል፣ የልዑሉም ኃይል ይጸልልሻል” ብሏል፣ (ሉቃስ 1፡35) መልአኩም፣ ዮሴፍ ማርያምን ለማግባት ፍራቻ እንዳያድርበት እንዲህ በሚሉ ቃላት አበረታቶታል፡ “ከእስዋ የተጸነሰው ከመንፈስ ቅዱስ ነው” (ማቲዎስ 1፡20)። ማቲዎስ ስለ ድንግል ሲያስረዳ፣ “በመንፈስ ቅዱስ ፀንሳ ተገኘች” ብሏል፣ (ማቴዎስ 1፡18)። ገላትያ 4፡4 በተጨማሪ ስለ ድንግል መውለድ ያስተምራል፡ “እግዚአብሔር ከሴት የተወለደውን ልጁን ላከ።”
              </Typography>
            </CardContent>
            
 


            <CardActions>
                <Stack direction='row'  ><Button variant="contained" sx={{backgroundColor:'#31d2f2'}}>See More</Button></Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2015/08/31/07/30/istanbul-915076_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>ከሞት በኃላ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                በክርስቲያን እምነት መሐከል ከሞት በኃላ የሚሆነውን ጉዳይ በተመለከተ በመጠን ጎላ ያለ መደናገር አለ፡፡ ጥቂቶች ከሞት በኃላ እያንዳንዱ ሰው እስከ መጨረሻው ፍርድ ድረስ ያም እያንዳንዱ ሰው ወደ መንግሥተ-ሰማይ ወይም ገሃነም እስከሚላክ ድረስ ይተኛል የሚለውን ይዘዋል፡፡
              </Typography>
            </CardContent>
             
 

            <CardActions>
                <Button variant="contained" sx={{backgroundColor:'#31d2f2'}}>See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           
            <CardContent>
              <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2019/05/11/17/31/lamps-4196132_960_720.jpg' />
              <Typography variant="h6" fontWeight={800}>የክርስቲያን ጥምቀት</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                በመጽሐፍ ቅዱስ መሠረት የክርስቲያን ጥምቀት በአማኞች በውስጥ ህይወት የሆነውን ነገር በውጫዊው መመስከር ነው፡፡ የክርስቲያን ጥምቀት የክርስቲያኖችን ከክርስቶስ ሞት፤መቀበር እና መነሳት ጋር መተባበርን ይገልጻል፡፡
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="contained" sx={{backgroundColor:'#31d2f2'}}>See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2019/10/03/09/38/spain-4522800_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="contained" sx={{backgroundColor:'#31d2f2'}}>See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2021/01/30/12/31/sultan-qaboos-grand-mosque-5963726_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="contained" sx={{backgroundColor:'#31d2f2'}}>See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2019/11/05/20/36/travel-4604499_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
             
 
            <CardActions>
                <Button variant="contained" sx={{backgroundColor:'#31d2f2'}}>See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2015/08/31/07/30/istanbul-915076_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="contained" sx={{backgroundColor:'#31d2f2'}}>See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
              <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2017/03/27/15/16/man-2179326_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
          

            <CardActions>
                <Button variant="contained">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2015/08/31/07/30/istanbul-915076_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="contained">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2018/06/17/19/12/church-3481187_960_720.jpg' />
            <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="contained">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
           <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2015/10/31/23/31/church-window-1016443_960_720.jpg' />
           <CardContent>
              <Typography variant="h6" fontWeight={800}>መጽሐፍ ቅዱስ</Typography>
              <Typography
                variant="body1"
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                ብዙ ክርስቲያኖች አሥራትን በመስጠት ጉዳይ ይታገላሉ፡፡ በአንዳንድ አቢያተ-ክርስቲያናት አሥራትን የመስጠት ጉዳይ ከልክ በላይ ጎልቷል፡፡
              </Typography>
            </CardContent>
            
             

            <CardActions>
                <Button variant="contained">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={3} xs={12} className="grow">
          <Card elevation={6} sx={{ border: 0.5 }}>
            <CardMedia component="img" height='250' image='https://cdn.pixabay.com/photo/2016/08/14/11/44/maria-1592567_960_720.jpg' style={{padding:'5px',paddingRight:'5px'}} />
            <CardContent>
              
              <Typography variant="h6" fontWeight={800}>የድንግል መውለድ</Typography>
              <Typography
                variant="body1"
                fontWeight={500}
               
                sx={{
                  height: 50,
                  overflow: "hidden",
                }}
              >
                የድንግል መውለድ መሠረተ እምነት በጣም አስፈላጊ ነው (ኢሳይያስ 7፡14፤ ማቲዎስ 1፡23፤ ሉቃስ 1፡27፣ 34)። በቅድሚያ ቃሉ ሁነቱን እንዴት እንደሚገልጸው እንመልከት። የማርያም ምላሽ የሆነውን ጥያቄ ስንመለከት፣ “ይህ እንዴት ሊሆን ይችላል?” (ሉቃስ 1፡34)፣ ገብርኤል ሲመልስ፣ “መንፈስ ቅዱስ ባንቺ ላይ ይመጣል፣ የልዑሉም ኃይል ይጸልልሻል” ብሏል፣ (ሉቃስ 1፡35) መልአኩም፣ ዮሴፍ ማርያምን ለማግባት ፍራቻ እንዳያድርበት እንዲህ በሚሉ ቃላት አበረታቶታል፡ “ከእስዋ የተጸነሰው ከመንፈስ ቅዱስ ነው” (ማቲዎስ 1፡20)። ማቲዎስ ስለ ድንግል ሲያስረዳ፣ “በመንፈስ ቅዱስ ፀንሳ ተገኘች” ብሏል፣ (ማቴዎስ 1፡18)። ገላትያ 4፡4 በተጨማሪ ስለ ድንግል መውለድ ያስተምራል፡ “እግዚአብሔር ከሴት የተወለደውን ልጁን ላከ።”
              </Typography>
            </CardContent>
            
            

            <CardActions>
                <Button variant="contained">See More</Button>
            </CardActions>
          </Card>
        </Grid>
        
      </Grid>
      
    </Container>
         </>
    )
}

