import React, { useRef, useState } from 'react';
import logo from '../Logo.png';
import './components_main.css';
//Icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


function Navbar() {
  const[searchValue,setSearchValue] = useState("");

  //Refrence
  const SearchRef = useRef(null);
  const handelSearch = (e) =>{
  }


  return (<div className='navContainer'>
      <div className='logo'>
        <div className='searchTab'>
          <input className='searchInput' autoCapitalize='none' autoComplete='off' autoCorrect='off' ref={SearchRef} type='search' value={searchValue} name="searchInput" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..."/>
          <SearchIcon className='searchIcon' onClick = {handelSearch}/>
        </div>
      </div>
      <div className='end-Section'>
        <NotificationsNoneOutlinedIcon/>
        <CalendarTodayOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div class="wrapper">  
          <img src="https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg" alt="" class="image--cover" />
        </div>  
      </div>
    </div>
  )
}

export default Navbar
