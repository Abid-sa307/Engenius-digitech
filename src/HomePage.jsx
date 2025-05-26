import React, { useEffect } from 'react';
import './homepage.css';

const HomePage = () => {

  useEffect(() => {
    // Add event listeners or any DOM manipulation here

      const logoButtons = document.querySelectorAll('.logo a');
      logoButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          button.style.transition = "transform 0.3s ease, color 0.3s ease";
          button.style.transform = "scale(1.1)";
          button.style.color = "#4CAF50";
        });
        button.addEventListener('mouseleave', () => {
          button.style.transition = "transform 0.3s ease, color 0.3s ease";
          button.style.transform = "scale(1)";
          button.style.color = "";
        });
      });

      // Cleanup event listeners when component unmounts
      return () => {
        logoButtons.forEach(button => {
          button.removeEventListener('mouseenter', () => {});
          button.removeEventListener('mouseleave', () => {});
        });
      };
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert('Thank you for your message!');
          form.reset();
        } else {
          return response.json().then(data => {
            console.error('Error:', data);
            alert('Oops! Something went wrong. Please try again.');
          });
        }
      })
      .catch(error => {
        console.error('Fetch Error:', error);
        alert('Oops! Something went wrong. Please try again.');
      });
    };

  return (
    <>
      <header>
        <div className="logo">ENGENIUS DIGITECH</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact" className="contact-btn">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <h1>Empowering Innovation, Crafting Digital Excellence</h1>
            <p>Empowering your digital journey</p>
            <p>Engenius Digitech is your gateway to navigate the digital landscape with innovative IT solutions. We harness the latest technologies to ensure your projects succeed.</p>
          </div>
          <div className="hero-image">
            <img src="logo.jpg" alt="Innovative Solutions" />
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-header">
            <h1>Innovative Solutions</h1>
            <p>Empowering your digital journey</p>
          </div>
          <div className="services-list">
            <div className="service">
              <a href="web-development.html">
                <img src="web-dev.jpg" alt="Web development" />
                <h3>Web Development</h3>
                <p>Craft stunning websites that engage users and drive results.</p>
              </a>
            </div>
            <div className="service">
              <a href="software-development.html">
                <img src="software-dev.jpg" alt="Software development" />
                <h3>Software Development</h3>
                <p>Transform your ideas into robust software solutions with us.</p>
              </a>
            </div>
            <div className="service">
              <a href="it-services.html">
                <img src="IT-dev.jpg" alt="IT services" />
                <h3>IT Services</h3>
                <p>Optimize your IT infrastructure for enhanced performance and security.</p>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>Engenius Digitech, based in Vadodara, is your gateway to navigate the digital landscape. As a forward-thinking web and software development company, we are dedicated to delivering innovative IT solutions tailored to your unique business needs. Our team of experts harnesses the latest technologies and trends to ensure that we deliver more than your requirement. We believe in fostering strong collaborations to turn your ideas into reality, providing exceptional service every step of the way.</p>
            </div>
            <div className="about-image">
              <img src="About-us.jpg" alt="About Us Image" />
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-form">
            <h2>Drop a message and your mail id for Us.</h2>
            <form method="POST" action="https://formspree.io/f/xjkvnbza">
              <textarea id="message" name="message" rows="4" required></textarea>
              <button type="submit" className="cta-btn">Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:saiyedabid2803@gmail.com">engeniussol@gmail.com</a><br />+91 8160490089 / +91 9998915886</p>
            <p>Location: Vadodara, GJ IN</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
