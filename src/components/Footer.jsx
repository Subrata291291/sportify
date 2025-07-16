import React from 'react';
import footerData from '../data/footerData';

const Footer = () => {
  return (
    <div className="col-lg-12 col-md-12 col-12">
      <div className="copyright_area">
        <p
          dangerouslySetInnerHTML={{ __html: `Copyright <span>@</span> ${footerData.copyright}` }}
        ></p>
        <ul>
          {footerData.socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
