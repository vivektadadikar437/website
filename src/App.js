import LinearStepper from "./LinearStepper";
import "./index.css";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} p={4} style={{margin:"auto" ,marginTop:"1rem" ,border:"1rem solid deepskyblue "}}>
      
        <Paper component={Box} p={3}>
        <h1 style={{textAlign:"center" ,color:"deepskyblue",border:"1rem solid deepskyblue",margin:"1rem"}}>   Internship Request at KGE Technologies Pvt Ltd  </h1>
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
  );
}

export default App;