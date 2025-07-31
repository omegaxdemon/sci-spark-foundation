const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2026 Science Association</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-icons">
              <a href="https://www.facebook.com/groups/467928009913476/" className="text-decoration-none" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/sxcsa_official/" className="text-decoration-none" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/st-xavier-s-college-science-association/?originalSubdomain=in" className="text-decoration-none" target="_blank">
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
