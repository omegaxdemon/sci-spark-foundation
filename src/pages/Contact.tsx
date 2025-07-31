import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-content fade-in">
                <h1 className="hero-title">CONTACT US</h1>
                <p className="hero-subtitle">Get in Touch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 fade-in">
              <div className="form-custom">
                <h3 className="mb-4">Send us a Message</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                  </div>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Subject" 
                    required 
                  />
                  <textarea 
                    className="form-control" 
                    rows={6} 
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-custom">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4 fade-in">
              <div className="card card-custom">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-map-marker-alt me-2" style={{color: '#6b46c1'}}></i>
                    Address
                  </h5>
                  <p className="card-text">
                    St. Xavier's College Kolkata<br />
                    30, Mother Teresa Sarani<br />
                    Kolkata, West Bengal 700016
                  </p>
                </div>
              </div>
              
              <div className="card card-custom">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-envelope me-2" style={{color: '#6b46c1'}}></i>
                    Email
                  </h5>
                  <p className="card-text">
                    science.association@sxccal.edu<br />
                    info@sxcscienceassoc.org
                  </p>
                </div>
              </div>
              
              <div className="card card-custom">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-phone me-2" style={{color: '#6b46c1'}}></i>
                    Phone
                  </h5>
                  <p className="card-text">
                    +91 33 2283 1745<br />
                    +91 33 2283 9988
                  </p>
                </div>
              </div>

              <div className="card card-custom">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-clock me-2" style={{color: '#6b46c1'}}></i>
                    Office Hours
                  </h5>
                  <p className="card-text">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 fade-in">
              <div className="card card-custom">
                <div className="card-body p-0">
                  <div 
                    style={{
                      width: '100%',
                      height: '400px',
                      background: 'linear-gradient(135deg, #6b46c1, #4c1d95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem',
                      borderRadius: '15px'
                    }}
                  >
{/*                     <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0215223770036!2d88.3498338149633!3d22.552567185178742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aa0d555555%3A0x5dd8b7ea6ab05ac!2sSt.%20Xavier's%20College%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1655911123456!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: '15px' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/> */}
                    <iframe 
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.806609108503!2d88.35359707529979!3d22.548916079508654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771aad282713%3A0x62c7778aead16f97!2sSt.%20Xavier&#39;s%20College%20(Autonomous)%20-%20Kolkata!5e0!3m2!1sen!2sin!4v1753936930774!5m2!1sen!2sin" 
                      width="600" height="450" style="border:0;" 
                      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card card-custom text-center fade-in">
                <div className="card-body">
                  <h3 className="card-title">Quick Questions?</h3>
                  <p className="card-text">
                    For immediate assistance or quick questions, feel free to reach out 
                    to us through our social media channels or give us a call.
                  </p>
                  <div className="row">
                    <div className="col-md-4">
                      <a href="#" className="btn btn-custom w-100">
                        <i className="fab fa-facebook me-2"></i>
                        Facebook
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="#" className="btn btn-custom w-100">
                        <i className="fab fa-instagram me-2"></i>
                        Instagram
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="#" className="btn btn-custom w-100">
                        <i className="fab fa-linkedin me-2"></i>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
