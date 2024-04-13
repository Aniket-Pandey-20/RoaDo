import React,{useState} from 'react';
import './components_main.css';
import logo from '../Logo.png';

//MUI components import
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import Link from '@mui/joy/Link';


//Icon Imports
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import WbIridescentOutlinedIcon from '@mui/icons-material/WbIridescentOutlined';

//Seprate component for dropdown menu, to reduce code redundancy.
const DropdownMenu = ({logo, text, menuItem }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown state
  };

  return (
    <Dropdown>
      <MenuButton variant="plain" onClick={toggleDropdown}>
        <div className='dropdown-menu-text'>
            {logo}
            {isOpen ? <h3 style={{marginLeft:'10px'}}>{text}</h3>:<h3 style={{color:'#5F6980',marginLeft:'10px'}}>{text}</h3>}
        </div>
        <div className='dropdown-arrow'>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </MenuButton>
      {isOpen && menuItem.map((item) => (
        <Link color="neutral" level="title-md" underline="none" variant="plain">
            <div class='itemMenu'>
                {item}
            </div>
        </Link>
      ))}
    </Dropdown>
  );
};

function Sidebar() {
  return (
    <div className="sidebar-container">
        <div className="sidebar-top">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="sidebar-content">
                <div className="sub-content">
                    <div className="sub-content-heading">DASHBOARD</div>
                    <div className="dashboard side-dropdown-menu">
                        <DropdownMenu logo={<TrackChangesOutlinedIcon/>} text="Dashboard" menuItem={['Analytics', 'Finance', 'Job Board']} />

                        <DropdownMenu logo={<EmailOutlinedIcon/>} text="Messages" menuItem={['Analytics', 'Finance', 'Job Board']} />

                        <DropdownMenu logo={<Person2OutlinedIcon/>} text="Friends" menuItem={['List', 'Connect']} />

                        <DropdownMenu logo={<GridViewOutlinedIcon/>} text="Apps" menuItem={['App1', 'App2']} />
                    </div>
                </div>
                <div className="sub-content">
                    <div className="sub-content-heading">PAGES</div>
                    <div className="dashboard side-dropdown-menu">
                        <DropdownMenu logo={<SupportOutlinedIcon/>} text="Help Center" menuItem={['Item1', 'Item2']} />

                        <DropdownMenu logo={<FolderOutlinedIcon/>} text="File Manager" menuItem={['File1', 'File2']} />
                    </div>
                </div>
            </div>
        </div>
        <div className="sidebar-bottom">
            <TuneOutlinedIcon className='sidebar-icon'/>
            <WbIridescentOutlinedIcon className='sidebar-icon'/>
            <LanguageOutlinedIcon className='sidebar-icon'/>
        </div>
    </div>
  );
}

export default Sidebar;
