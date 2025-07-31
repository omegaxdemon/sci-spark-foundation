const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Science Association</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-icons">
              <a href="#" className="text-decoration-none">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;