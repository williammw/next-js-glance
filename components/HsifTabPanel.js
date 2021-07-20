import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SortableTable from './sortable-table'
function TabPanel(props) {

 
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));





export default function ScrollableTabsButtonAuto({hsifDate, monthdate}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tabdata, setTabdata] = React.useState([])
  const [currM , setCurrM] = React.useState("0");
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    const val = String(monthdate[0]).padStart(2,'0')
    const valp = hsifDate.replace('D','').replace('HK','')
    setCurrM(valp)
    const ans = valp+val
    // console.log(ans)
    fetch(`http://localhost:3000/api/hsif/tradedate?id=${ans}`)
      .then((response) => response.json())
      .then((json) => setTabdata(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  
  // asyncFetch()
  const handleChange = async (event, newValue) => {
    event.preventDefault()
    // console.log('fuck')
    const res = await fetch(`http://localhost:3000/api/hsif/tradedate?id=${event.target.innerText}`)
    const result = await res.json()
    console.log(result)
    setTabdata(result)
    setValue(newValue);
    
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
      >
          {monthdate.length > 0 && currM != "0" && 
            monthdate.map((dd, idx) => {
              let a = currM+String(dd).padStart(2,'0')
              return (<Tab label={a} {...a11yProps(idx)} key={idx}/>)
            })
          } 
          {/* <Tab label="210601" {...a11yProps(0)} /> */}
          

        </Tabs>
      </AppBar>
      {monthdate.length > 0 && currM != "0" && Object.values(tabdata).length > 0 &&
        monthdate.map((dd, idx) => {
          let a = currM+String(dd).padStart(2,'0')
          return (
          
          <span key={idx}>
          <TabPanel value={value} index={idx}>
            <SortableTable tabdata={tabdata}/> 
          </TabPanel>
          </span>
          )
        }) 
      }
      
      {/* <TabPanel value={value} index={1}>
      <SortableTable tabdata={tabdata}/>
      </TabPanel> */}    
    </div>
  );
}