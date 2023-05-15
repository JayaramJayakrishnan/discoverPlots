import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'

import './index.css'

const Footer = () => (
    <div className='footer-section'>
        <div className='footer-section-content'>
            <div className='footer-top-section'>
                <div className='footer-left-section'>
                    <h1 className='footer-logo'>Discover Plots</h1>
                    <p className='footer-logo-caption'>Loreum ispum is the dummy text</p>
                </div>

                <div className='footer-right-section'>
                    <ul className='section-row'>
                        <li className='group-name'>Company</li>
                        <li className='group-item'>Contact</li>
                    </ul>

                    <ul className='section-row'>
                        <li className='group-name'>Who we help</li>
                        <li className='group-item'>Customers</li>
                        <li className='group-item'>Brokers</li>
                        <li className='group-item'>Lenders</li>
                    </ul>

                    <ul className='section-row'>
                        <li className='group-name'>Follow us</li>
                        <li className='group-item contact-item '> <AiFillFacebook className='contact-icon'/> Facebook</li>
                        <li className='group-item contact-item '> <FaInstagramSquare className='contact-icon'/> Instagram</li>
                    </ul>
                    
                </div>
            </div>

            <div className='footer-bottom-section'>
                <p className='copyright-text'>Copyright @ 2023 City Plots</p>
                <ul className='polcies-section'>
                    <li className='policy-item'>Privacy Policy</li>
                    <li className='policies-seperator'></li>
                    <li className='policy-item'>Privacy Collection Notice</li>
                    <li className='policies-seperator'></li>
                    <li className='policy-item'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Footer