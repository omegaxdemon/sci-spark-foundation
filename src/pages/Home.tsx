import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Home = () => {
  useEffect(() => {
    // Add scroll animations
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

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
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
                <h1 className="hero-title">SCIENCE ASSOCIATION</h1>
                <p className="hero-subtitle">St. Xavier's College (Autonomous), Kolkata</p>
                <p className="lead">Exploring the frontiers of scientific knowledge and innovation</p>
                <button className="btn btn-custom mt-4">Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Our Activities</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop" className="card-img-top" alt="Research" />
                <div className="card-body">
                  <h5 className="card-title">Research Projects</h5>
                  <p className="card-text">Cutting-edge research initiatives led by our talented students and faculty members.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop" className="card-img-top" alt="Technology" />
                <div className="card-body">
                  <h5 className="card-title">Technology Workshops</h5>
                  <p className="card-text">Hands-on workshops on latest technologies and programming languages.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom">
                <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop" className="card-img-top" alt="Innovation" />
                <div className="card-body">
                  <h5 className="card-title">Innovation Hub</h5>
                  <p className="card-text">A space for creative thinking and innovative project development.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom">
                <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop" className="card-img-top" alt="Coding" />
                <div className="card-body">
                  <h5 className="card-title">Coding Competitions</h5>
                  <p className="card-text">Regular programming contests and hackathons to challenge young minds.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom">
                <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop" className="card-img-top" alt="Environment" />
                <div className="card-body">
                  <h5 className="card-title">Environmental Studies</h5>
                  <p className="card-text">Research and awareness programs focused on environmental conservation.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 fade-in">
              <div className="card card-custom">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" className="card-img-top" alt="Science Fair" />
                <div className="card-body">
                  <h5 className="card-title">Science Exhibitions</h5>
                  <p className="card-text">Annual science fairs showcasing student projects and discoveries.</p>
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

export default Home;
