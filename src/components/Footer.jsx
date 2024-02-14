import React from 'react';
import './external styles/footer.css'; // Import your custom CSS file (create this file if it doesn't exist)

function Footer(props) {
  return (
    <footer className="footer mt-10">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            {/* Your logo or other content */}
          </div>
          <div className="col-md-3 col-12">
            <h3>Learn About Us</h3>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>My Portfolio</li>
            </ul>
          </div>
          <div className="col-md-3 col-12">
            <h3>Our Services</h3>
            <ul>
              <li>Website Development</li>
              <li>Website Maintenance and Support</li>
              <li>commerce Solutions</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6">Made with ❤️ by Malek </p>
      </div>
    </footer>
  );
}

export default Footer;
