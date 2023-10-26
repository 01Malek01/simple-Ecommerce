function Footer(props) {
    return (
      <>
      <hr className="hr m-5"></hr>
      <div className="footer"
      >
          <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <img src={require('../assets/1x/Asset 1.png')} alt='logo' />
          </div>
          <div className="col-md-3 col-12">
              <h3>Learn About Us</h3>
              <ul>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact</li>
  
              </ul>
  
          </div>
          <div className="col-md-3 col-12">
          <h3>Our services</h3>
    
  
  
          </div>
          <div className="col-md-3 col-12">
          <h3>Download the app</h3>
              <ul>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact</li>  
              </ul>
  
  
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }
  export default Footer;
  