import {MdArrowDropDown} from "react-icons/md"

import './index.css' 

const Header = () => (
    <nav className="nav-container">
        <div className="nav-content">
          <h1 className="logo">Discover Plots</h1>
          <ul className="nav-items-container">
            <li className="nav-list-item">
                Projects
                <MdArrowDropDown className="drop-down-icon" />
            </li>
            <li className="nav-list-item">
                Agents
            </li>
            <li className="nav-list-item">
                Amenities
            </li>
            <li className="nav-list-item">
                <hr className="line"/>
            </li>
            <li className="nav-list-item">
                Sign In
            </li>
            <li>
                <button type="button" className="nav-button">
                    Schedule a Call
                </button>
            </li>
          </ul>
        </div>
    </nav>
)

export default Header