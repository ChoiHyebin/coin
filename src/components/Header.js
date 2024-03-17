import Navbar from '../components/Navbar/Navbar';
import './Header.css'
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";
import { BsEmojiSunglassesFill, BsMoonStarsFill } from "react-icons/bs";

function Header() {
     const {darkTheme, setDarkTheme} = useContext(ThemeContext);
     return (
       <header className={!darkTheme ? 'header-container' : 'header-container darktheme'}>
          <div className="header">
              <h1> <a href="/">Coin Values</a> </h1>
              <Navbar />
          </div>
          <div className='darkBtn'>
          {
               !darkTheme ? <BsEmojiSunglassesFill onClick={()=>{setDarkTheme(!darkTheme)}}
               className={!darkTheme ? '' : 'darktheme'}/> :
                  <BsMoonStarsFill onClick={()=>{setDarkTheme(!darkTheme)}}
                  className={!darkTheme ? '' : 'darktheme'}/>
          }  
          </div> 
          
          
          
       </header>
    );
  }
  
  export default Header;
  