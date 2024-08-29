import React from 'react'
import './Navbar.css'
import logo  from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import nav_underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = React.useState("home"); 
  const underline = nav_underline;

  const menuRef = React.useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }


  return (
    <div className='navbar'>
      <div className='w-full'>
      {/* <img src={logo} alt="" className='nav-logo'/> */}
     <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />
      <div ref={menuRef} className="nav-menu">
       <img src={menu_close} alt="" className="nav-mob-close"  onClick={closeMenu} />
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>    Home</p>     </AnchorLink> {menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>   About Me</p> </AnchorLink> {menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p> </AnchorLink> {menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>    Portfolio</p></AnchorLink> {menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}> Contact</p>  </AnchorLink> {menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </div>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      </div>
    </div>
  )
}

export default Navbar