import './Footer.css';
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";
      
const Footer = ()=>{
    const {darkTheme} = useContext(ThemeContext);
    return (
        <footer  className={!darkTheme ? 'footer' : 'footer darktheme'}
        >
            <div>
                <p>
                copyright ⓒ Hyebin Choi. ALL RIGHTS RESERVED
                </p>
            </div>
        </footer>
    )
}

export default Footer;