import LinearStepper from "./LinearStepper";
import "./index.css";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from 'react-bootstrap/Stack';

// function App() {
//   return (





  

 


const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    
    <Stack gap={3}>
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <Container fixed component={Box} p={4} style={{border:"2vh solid deepskyblue ", backgroundColor:"yellow"}}>
      
         <Paper component={Box} p={3} >
         <h1 style={{textAlign:"center" ,color:"deepskyblue",border:"11px solid deepskyblue",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1rem",paddingBottom:"1rem",backgroundColor:"yellow"}}>   Internship Request at KGE Technologies Pvt Ltd  </h1><br/>
           <LinearStepper />
           <footer style={{textAlign:"center"}}><br /> <br /><hr /><br />
               Do not submit confidential information such as credit card detais,mobile and ATM PINs,OTPs,account <br />passwords,ect.<a href=''>Report Abuse</a><br />
               <div><br />
                 Powered by <sub>Vivek</sub><sup>Forms</sup>
               </div>
             </footer>
         </Paper>
       
       </Container>
      
          </ThemeProvider>
          </Stack>
 
    
  );
}

    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Container fixed component={Box} p={4} style={{border:"2vh solid deepskyblue ", backgroundColor:"yellow"}}>
      
    //     <Paper component={Box} p={3} >
    //     <h1 style={{textAlign:"center" ,color:"deepskyblue",border:"11px solid deepskyblue",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1rem",paddingBottom:"1rem",backgroundColor:"yellow"}}>   Internship Request at KGE Technologies Pvt Ltd  </h1><br/>
    //       <LinearStepper />
    //       <footer style={{textAlign:"center"}}><br /> <br /><hr /><br />
    //           Do not submit confidential information such as credit card detais,mobile and ATM PINs,OTPs,account <br />passwords,ect.<a href=''>Report Abuse</a><br />
    //           <div><br />
    //             Powered by <sub>Vivek</sub><sup>Forms</sup>
    //           </div>
    //         </footer>
    //     </Paper>
       
    //   </Container>
    // </ThemeProvider>
   
  

export default App;