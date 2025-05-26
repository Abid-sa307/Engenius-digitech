import React, { useEffect } from "react";
import './software.css';

const Software = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.sidebar ul li');

    const handleClick = function () {
      document.querySelector('.sidebar ul li.active')?.classList.remove('active');
      this.classList.add('active');

      document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
      });

      const target = document.getElementById(this.getAttribute('data-content'));
      target?.classList.add('active');
    };

    items.forEach(item => item.addEventListener('click', handleClick));

    // Cleanup on unmount
    return () => {
      items.forEach(item => item.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <>
      <header>
        <div className="logo">ENGENIUS DIGITECH</div>
        <nav>
          <ul>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="software-development">
          <h2>Software Development</h2>
          <div className="content">
            <img src="software-dev.jpg" alt="Software Development" />
            <p>
              Engenius Digitech offers comprehensive software development services...
              {/* Full paragraph here */}
            </p>
          </div>
        </section>

        <section className="lets-talk">
          <h2>Let's talk</h2>
          <h3>We would love to hear from you!</h3>
        </section>

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

export default Software;
