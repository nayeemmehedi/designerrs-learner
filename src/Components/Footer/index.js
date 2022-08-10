import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/Designerrs_Logo.svg";
import footer_logo from "../../Assets/Images/Bottom.svg";
import Style from "../../Style/footer.module.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const { siteInfo, footer } = useSelector((state) => state.pages);
  
  return (
    <React.Fragment>
      <footer className="rel ">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="">
                <Link to="/">
                  <img
                    src={
                      siteInfo?.websiteLogo?.link
                        ? siteInfo?.websiteLogo?.link
                        : footer_logo
                    }
                    alt="Designerrs"
                    style={{
                      width: "128px",
                      height: "32px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>
              <div className={Style.about}>
                <p>
                  {siteInfo?.companyDescription
                    ? siteInfo?.companyDescription
                    : "We are design education company which helps design aspirants acquire skills to design intuitive and exquisite experiences."}
                </p>
                <p>
                  <span>
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  +91+
                  {siteInfo?.contactNumber
                    ? siteInfo?.contactNumber
                    : "70900-78007"}
                </p>
                <p>
                  <span>
                    <i className="far fa-envelope"></i>
                  </span>
                  {siteInfo?.contactEmail
                    ? siteInfo?.contactEmail
                    : "learn@designerrs.com"}
                </p>
                <p className={Style.socials}>
                  <a href={siteInfo?.socialMediaLinks?.behance} target="_blank">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href={siteInfo?.socialMediaLinks?.dribble} target="_blank">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a href={siteInfo?.socialMediaLinks?.medium} target="_blank">
                    <i className="fab fa-medium"></i>
                  </a>
                  <a
                    href={siteInfo?.socialMediaLinks?.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </p>
                <p className={Style.socials}>
                  <a href={siteInfo?.socialMediaLinks?.twitter} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={siteInfo?.socialMediaLinks?.behance} target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href={siteInfo?.socialMediaLinks?.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={siteInfo?.socialMediaLinks?.behance} target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </p>
              </div>
            </div>

            {footer?.map((i, idx) => (
              <div className="col-sm-12 col-md-2 col-lg-2" key={idx}>
                <ul className={Style.lists}>
                  <li className={Style.heading}>{i?._id}</li>
                  {i?.pageDetails?.map((t, tx) => (
                    <li key={tx}>
                      <Link to={`/${t?.pageUrl}`}>{t?.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={Style.copyright}>
            Copyright © 2014-{new Date().getFullYear()} All Rights Reserved |
            Designerrs
          </div>
        </div>
        <div className={Style.btm_img}>
          <img src={footer_logo} alt="Designerrs" />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
