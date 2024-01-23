import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-white.png'
import logo_dark from '../../assets/logo-black.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'


const Navbar = ({theme, setTheme}) => {

  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className='navbar'>

      <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>

      <ul>
        <li>CodeSphere</li>
      </ul>

      <div className='search-box'>
        <input id='inputValue' type="text" placeholder='Search'/>
        <img onClick={()=> {
          let inputValue = document.getElementById('inputValue').value
          window.open(`https://developer.mozilla.org/en-US/${inputValue}`, '_blank')
          }} 
          src={theme == 'light' ? search_icon_light : search_icon_dark}
          />
      </div>

      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>

    </div>

  )
}

export default Navbar
