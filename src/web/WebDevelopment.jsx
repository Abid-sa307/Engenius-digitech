import React from 'react';
import './web.css';

const WebDevelopment = () => {
    document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.sidebar ul li.active').classList.remove('active');
        this.classList.add('active');

        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });

        document.getElementById(this.getAttribute('data-content')).classList.add('active');
    });
});

  return (
    <>
      <header>
        <div className="logo">ENGENIUS DIGITECH</div>
        <nav>
          <ul>
            <li><a href="#contact">Contact</a></li> {/* Updated navigation link */}
          </ul>
        </nav>
      </header>

      <main>
        <section className="web-development">
          <h2>Web Development</h2>
          <div className="content">
            <img src="web-dev.jpg" alt="Web Development Image" />
            <p>
              Craft stunning websites that engage users and drive results. Our team of experts uses the latest technologies and best practices to create websites that offer exceptional performance and a seamless user experience. Whether you're seeking a responsive design that looks great on all devices, smooth navigation for easy browsing, or unique features that set your website apart, we deliver custom solutions tailored to your needs.
              <br /><br />
              We focus on building websites that are not only visually appealing but also fast, reliable, and easy to use. By applying the most current web development tools, we ensure your website is optimized for performance and usability, helping you stay ahead in the competitive online space.
            </p>
          </div>
        </section>

        <section className="lets-talk">
          <h2>Let's talk</h2>
          <h3>We would love to hear from you!</h3>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to work with us, feel free to reach out!</p>
          <p>Email: <a href="mailto:engeniussol@gmail.com">engeniussol@gmail.com</a></p>
          <p>Phone: +91 8160490089</p>
          <p>Phone: +91 9998925886</p>
        </section>
      </main>
    </>
  );
};

export default WebDevelopment;

