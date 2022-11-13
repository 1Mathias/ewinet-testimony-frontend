import { Link } from "react-router-dom";
import image from '../../image/logo.jpg';
import "./topBar.css";


export default function TopBar() {
  const currentUser = false;
  return (
    <div className="top">
      <div className="topLeft">
        <img className="header_icon" src={image} alt="logo" />
      </div>
      {/* <div className="header_center">
        <input type="text" placeholder='Search Something' />

        <SearchIcon />
      </div> */}
      <div className='search-box'>
        <input className="search-text" type="text" placeholder="Search Anything" />
        <a href="#" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem active"> <Link className="link" to="/">
            HOME
          </Link></li>
          <div className="dropdown">
            <li className="topListItem ">RELIGION</li>
            <div className="dropdown-content" >
              <li className="subitem"><Link className="link" to='/religion'>Orthodox</Link></li>
              <li className="subitem "><Link className="link" to='/religion'>Islam</Link></li>
              <li className="subitem "><Link className="link" to='/religion'>Catholic</Link></li>
              <li className="subitem "><Link className="link" to='/religion'>Jehovah</Link></li>
              <li className="subitem "><Link className="link" to='/religion'>Only-Jesus</Link></li>
              <li className="subitem "><Link className="link" to='/religion'>7th-Day</Link></li>

            </div>
          </div>
          
          <li className="topListItem">CONTACT</li>
          <li className="topListItem"><Link className="link" to="/write">
            WRITE
          </Link></li>
          {currentUser && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (<Link className='link' to='/settings'>
          <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </Link>) : (
          <ul className="topList">
            <li className="topListItem login-btn">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            |
            <li className="topListItem register-btn">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

