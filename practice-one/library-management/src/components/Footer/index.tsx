import React from 'react'

// Importing the Logo,and Typography components
import Logo from '../Logo/index'
import Typography from '../Typography/index'

// Importing the image URL as the variable
import logo from '../../assets/images/logo-website-footer.png'

// Importing the Icon from the React-icons library
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'

// Importing the CSS file for styling
import './footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      {/* The footer left */}
      <div className="footer-left">
        {/* The website logo */}
        <Logo
          imageSrc={logo}
          altText="This is the logo website"
          widthSize={150}
          heightSize={70}
        />
        {/* The website copyright */}
        <Typography variant="p" className="copyright">
          Copyright &copy; 2023, Giang Nguyen
          <br />
          All rights reserved.
        </Typography>
        {/* The website link social */}
        <ul className="link-social">
          <li>
            <a href="javascript:void(0)" className="link-social-item">
              <BsTwitter size={30} />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="link-social-item">
              <FaFacebookSquare size={30} />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="link-social-item">
              <BsInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* The footer right */}
      <div className="footer-right">
        <div className="footer-column">
          <Typography variant="p" className="footer-column-title">
            discover
          </Typography>
          <ul className="footer-column-items">
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Home
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Books
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Authors
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Member
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Hire requests
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <Typography variant="p" className="footer-column-title">
            about us
          </Typography>
          <ul className="footer-column-items">
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Service Terms
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <Typography variant="p" className="footer-column-title">
            help
          </Typography>
          <ul className="footer-column-items">
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Report a Problem
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="footer-column-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
