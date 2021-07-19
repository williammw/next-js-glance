import React from 'react';
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

export default function ScrollableTabsButtonAuto({hsif}) {
  const classes = useStyles();
  console.log('hsi', hsif)
  const [value, setValue] = React.useState(0);
  const [tabdata, setTabdata] = React.useState(Object.values(hsif[0]['hsif210601f']))
  const handleChange = async (event, newValue) => {
    event.preventDefault()
    console.log('fuck')
    const res = await fetch(`http://localhost:3000/api/hsif/tradedate?id=${event.target.innerText}`)
    const result = await res.json()
    // console.log(result)
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
          <Tab label="210601" {...a11yProps(0)} />
          <Tab label="210602" {...a11yProps(1)} />
          <Tab label="210603" {...a11yProps(2)} />
          <Tab label="210604" {...a11yProps(3)} />
          <Tab label="210605" {...a11yProps(4)} />
          <Tab label="210606" {...a11yProps(5)} />
          <Tab label="210607" {...a11yProps(6)} />
          <Tab label="210608" {...a11yProps(7)} />
          <Tab label="210609" {...a11yProps(8)} />
          <Tab label="210610" {...a11yProps(9)} />
          <Tab label="210611" {...a11yProps(10)} />
          <Tab label="210612" {...a11yProps(11)} />
          <Tab label="210604" {...a11yProps(12)} />
          <Tab label="210604" {...a11yProps(13)} />
          <Tab label="210604" {...a11yProps(14)} />
          <Tab label="210604" {...a11yProps(15)} />
          <Tab label="210604" {...a11yProps(16)} />
          <Tab label="210604" {...a11yProps(17)} />
          <Tab label="210604" {...a11yProps(18)} />
          <Tab label="210604" {...a11yProps(19)} />
          <Tab label="210604" {...a11yProps(20)} />
          <Tab label="210604" {...a11yProps(21)} />
          <Tab label="210604" {...a11yProps(22)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SortableTable tabdata={tabdata}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SortableTable tabdata={tabdata}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <SortableTable tabdata={tabdata}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <SortableTable tabdata={tabdata}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <SortableTable tabdata={tabdata}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <SortableTable tabdata={tabdata}/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <SortableTable tabdata={tabdata}/>
      </TabPanel>
    </div>
  );
}