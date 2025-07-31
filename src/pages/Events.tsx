import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Events = () => {
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

  const upcomingEvents = [
    {
      title: "Annual Science Fair 2024",
      date: "March 15-17, 2024",
      description: "Showcase of innovative student projects and research work.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "Exhibition"
    },
    {
      title: "AI & Machine Learning Workshop",
      date: "February 28, 2024",
      description: "Hands-on workshop on artificial intelligence and machine learning.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      category: "Workshop"
    },
    {
      title: "Environmental Science Symposium",
      date: "April 10, 2024",
      description: "Expert talks on climate change and environmental conservation.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop",
      category: "Symposium"
    }
  ];

  const pastEvents = [
    {
      title: "Coding Marathon 2023",
      date: "December 10, 2023",
      description: "24-hour coding competition with exciting challenges.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Competition"
    },
    {
      title: "Physics Olympiad",
      date: "November 25, 2023",
      description: "Inter-college physics competition and knowledge sharing.",
      image: "https://images.unsplash.com/photo-1500375592092-4009590962994?w=400&h=250&fit=crop",
      category: "Competition"
    },
    {
      title: "Innovation Summit",
      date: "October 15, 2023",
      description: "Celebrating breakthrough innovations in science and technology.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
      category: "Summit"
    }
  ];

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
                <h1 className="hero-title">EVENTS</h1>
                <p className="hero-subtitle">Explore Our Scientific Journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Upcoming Events</h2>
          <div className="row">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="col-lg-4 col-md-6 fade-in">
                <div className="card card-custom">
                  <img src={event.image} className="card-img-top" alt={event.title} />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge" style={{backgroundColor: '#6b46c1', color: 'white'}}>
                        {event.category}
                      </span>
                      <small className="text-muted">{event.date}</small>
                    </div>
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <button className="btn btn-custom">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title fade-in">Past Events</h2>
          <div className="row">
            {pastEvents.map((event, index) => (
              <div key={index} className="col-lg-4 col-md-6 fade-in">
                <div className="card card-custom">
                  <img src={event.image} className="card-img-top" alt={event.title} />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge" style={{backgroundColor: '#4c1d95', color: 'white'}}>
                        {event.category}
                      </span>
                      <small className="text-muted">{event.date}</small>
                    </div>
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <button className="btn btn-custom">View Gallery</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card card-custom text-center fade-in">
                <div className="card-body">
                  <h3 className="card-title">Stay Updated</h3>
                  <p className="card-text">
                    Join our mailing list to receive notifications about upcoming events, 
                    workshops, and competitions.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="input-group">
                        <input 
                          type="email" 
                          className="form-control" 
                          placeholder="Enter your email"
                          style={{
                            background: 'rgba(248, 250, 252, 0.1)',
                            border: '1px solid rgba(107, 70, 193, 0.3)',
                            color: 'white'
                          }}
                        />
                        <button className="btn btn-custom" type="button">Subscribe</button>
                      </div>
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

export default Events;