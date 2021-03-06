import React from "react";
import { Link } from "react-router-dom";
import { FooterDiv } from "../Components/Main.styled";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="primary">
        <div className="footer_about">
          <h5>ABOUT ROUTER</h5>
          <p>
           This is my first router project of ecommerce website in which
            i am use all configuratution of  E-commerce website wher you can
             purchage men's and women's products.
          </p>
        </div>
        <div>
          <h5>Useful Links</h5>
          <ul>
            <li>
              <Link to={"./"}>Home</Link>
            </li>
            <li>
              <Link to={"./about"}>About Us</Link>
            </li>
            <li>
              <Link to={"./products"}>Products</Link>
            </li>
            <li>
              <Link to={"./contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <h3>Let’s Get Social</h3>
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <PinterestIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="secondary">
        <div>© 2022 Router |</div>
        <div>Privacy Policy</div>
        <div>|</div>
        <div>Terms & Conditions</div>
        <div>|</div>
        <div>Accessibility</div>
        <div>|</div>
        <div>California Supply Chains Act</div>
        <div>|</div>
        <div>DSA Code Of Ethics</div>
        <div>|</div>
        <div>Disclaimer</div>
        <div>|</div>
        <div>Preference Center</div>
      </div>
    </FooterDiv>
  );
};

export default Footer;
