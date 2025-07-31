import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const About = () => {
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
                <h1 className="hero-title">ABOUT US</h1>
                <p className="hero-subtitle">Discover Our Mission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 fade-in">
              <h2 className="section-title text-start">Our Mission</h2>
              <p className="lead mb-4">
                The Science Association of St. Xavier's College Kolkata is dedicated to fostering 
                scientific curiosity and innovation among students. We serve as a bridge between 
                theoretical knowledge and practical application.
              </p>
              <p>
                Established with the vision of creating a vibrant scientific community, our 
                association brings together students from various disciplines to explore the 
                fascinating world of science and technology. We organize workshops, seminars, 
                research projects, and competitions that challenge conventional thinking and 
                encourage creative problem-solving.
              </p>
              <p>
                Through our initiatives, we aim to nurture the next generation of scientists, 
                researchers, and innovators who will contribute to solving global challenges 
                and advancing human knowledge.
              </p>
            </div>
            <div className="col-lg-6 fade-in">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=600&h=400&fit=crop" 
                alt="Science Building" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Our Values</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom text-center">
                <div className="card-body">
                  <i className="fas fa-lightbulb fa-3x mb-3" style={{color: '#6b46c1'}}></i>
                  <h5 className="card-title">Innovation</h5>
                  <p className="card-text">
                    We encourage creative thinking and innovative approaches to scientific challenges.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom text-center">
                <div className="card-body">
                  <i className="fas fa-users fa-3x mb-3" style={{color: '#6b46c1'}}></i>
                  <h5 className="card-title">Collaboration</h5>
                  <p className="card-text">
                    We believe in the power of teamwork and collaborative research efforts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom text-center">
                <div className="card-body">
                  <i className="fas fa-microscope fa-3x mb-3" style={{color: '#6b46c1'}}></i>
                  <h5 className="card-title">Excellence</h5>
                  <p className="card-text">
                    We strive for excellence in all our scientific endeavors and research projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 fade-in">
              <div className="card card-custom">
                <div className="card-body">
                  <h3 className="display-4" style={{color: '#6b46c1'}}>500+</h3>
                  <p className="card-text">Active Members</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 fade-in">
              <div className="card card-custom">
                <div className="card-body">
                  <h3 className="display-4" style={{color: '#6b46c1'}}>50+</h3>
                  <p className="card-text">Research Projects</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 fade-in">
              <div className="card card-custom">
                <div className="card-body">
                  <h3 className="display-4" style={{color: '#6b46c1'}}>25+</h3>
                  <p className="card-text">Annual Events</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 fade-in">
              <div className="card card-custom">
                <div className="card-body">
                  <h3 className="display-4" style={{color: '#6b46c1'}}>10+</h3>
                  <p className="card-text">Years of Excellence</p>
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

export default About;