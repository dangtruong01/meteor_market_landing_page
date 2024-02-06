import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  Button,
  Container,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Select,
  MenuItem,
  NativeSelect,
  InputBase,
  withStyles,
  InputLabel,
} from "@material-ui/core";
import Page from "src/component/Page";
import Footer from "src/layouts/HomeLayout/Footer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  headBox: {
    borderRadius: "9px",
    background: "#1C1C1C",
    padding: "35px 35px",
    [theme.breakpoints.down("xs")]: {
      padding: "35px 15px",
    },
  },
  numberBox: {
    backgroundColor: "#212123",
    borderRadius: "9px",
    padding: "24px 24px",
    // textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 5%)",
  },
  smallText: {
    color: "rgba(255,255,255,80%)",
  },
  mediumText: {
    color: "#fff",
  },
  summryMainBox: {
    backgroundColor: "rgb(255, 255, 255, 5%)",
    borderRadius: "9px",
    padding: "20px",
  },
}));

const BootstrapInput = withStyles((theme) => ({
  input: {
    // borderR
    // borderLeftRadius: 4,
    position: "relative",
    backgroundColor: "rgb(255, 255, 255, 5%)",
    border: "none",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      // borderRadius: 4,
      // borderColor: "#80bdff",
      // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);


let coinsData = 
[
      {value: '../images/DAI-logo1.png', label: 'DAI'},
      {value:'../images/LUSD-logo1.png',label: 'LUSD' }
];


function Index() {
  const classes = useStyles();
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title="Swap">
      <Box className={classes.headBox}>
        <Box mb={5}>
          <Typography variant="h2" className="textColorFormate">
            Swap
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "10px" }}>
            Easily swap crypto assets across platforms.
          </Typography>
        </Box>
        <Container maxWidth="sm">
          <Box className={classes.numberBox}>
            <Typography variant="h3" className="textColorFormate">
              Swap
            </Typography>
            <form>
              <Box
                mt={4}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"end"}
                mb={"4px"}
              >
                <span className={classes.smallText}>Supply Amount</span>{" "}
                <span className={classes.mediumText}>
                  Wallet Balance 112.900 DAI
                </span>
              </Box>

              <Grid container>
                <Grid item xs={8}>
                <FormControl>
                <BootstrapInput value={"1.2 ($2813.15)"} id="demo-customized-textbox" />
              </FormControl>
                </Grid>
                <Grid item xs={4}>
                <FormControl>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <option value={10}>
                    DAI
                  </option>
                  <option value={20}>DAI</option>
                  <option value={30}>DAI</option> 
                 
                </NativeSelect>
              </FormControl>
                </Grid>
              </Grid>
              <FormControl variant="outlined">
                {/* <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <span style={{ marginRight: "15px", textAlign: "end" }}>
                      DAI <br /> -$0.00
                    </span>
                    <Button variant="contained">MAX</Button>
                  </InputAdornment>
                }
                labelWidth={0}
                placeholder="$0.00"
              /> */}

                <Box
                  mt={4}
                  display={"flex"}
                  justifyContent={"right"}
                  alignItems={"end"}
                  mb={"4px"}
                >
                  <Button variant="contained" style={{ marginRight: "20px" }}>
                    HALF
                  </Button>
                  <Button variant="contained">MAX</Button>
                </Box>
              </FormControl>

              <Box mt={5} mb={"4px"}>
                <span className={classes.smallText}>Lend Duration</span>
              </Box>
              <FormControl variant="outlined">
                <Select value={age} onChange={handleChange}>
                  <MenuItem value={10}>3 months {"{3.91% interest}"}</MenuItem>
                  <MenuItem value={20}>3 months {"{3.91% interest}"}</MenuItem>
                  <MenuItem value={30}>3 months {"{3.91% interest}"}</MenuItem>
                </Select>
              </FormControl>
              <Box mt={5} className={classes.summryMainBox}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"end"}
                >
                  <Typography variant="h5">Supply Stats</Typography>
                  <MdOutlineKeyboardArrowDown color="#fff" fontSize={"24px"} />
                </Box>
                <Box
                  mt={3}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"end"}
                >
                  <span className={classes.smallText}>Supply APY:</span>
                  <span className={classes.mediumText}>0.18%</span>
                </Box>
                <Box
                  mt={2}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"end"}
                >
                  <span className={classes.smallText}>Supply Balance:</span>
                  <span className={classes.mediumText}>$45</span>
                </Box>
                <Box
                  mt={2}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"end"}
                >
                  <span className={classes.smallText}>Reward APR:</span>
                  <span className={classes.mediumText}>0.13%</span>
                </Box>
                <Box mt={3}>
                  <Typography variant="h5">Borrow Limit</Typography>
                </Box>
                <Box
                  mt={3}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"end"}
                >
                  <span className={classes.smallText}>Your Borrow Limit:</span>
                  <span className={classes.mediumText}>$0 {"->"} $0.00</span>
                </Box>
                <Box
                  mt={3}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"end"}
                >
                  <span className={classes.smallText}>Borrow Limit Used:</span>
                  <span className={classes.mediumText}>{"0% -> 0%"}</span>
                </Box>
              </Box>
              <Box textAlign={"center"} mt={5}>
                <Button variant="contained" style={{ minWidth: "170px" }}>
                  Supply
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Page>
  );
}
export default Index;
