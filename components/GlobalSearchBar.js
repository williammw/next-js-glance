import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function GlobalSearchBar() {
  const classes = useStyles();

  return (
    <div className="cccsss">
      <FormControl className="global-search-bar-form-control">
        {/* <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel> */}
        <Input
        className="global-search-bar"
          fullWidth={true}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      
      
    </div>
  );
}