import React from 'react';
import './it.css';

const It = () => {
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
        <section className="it-development">
          <h2>IT Development</h2>
          <div className="content">
            <img src="IT-dev.jpg" alt="IT Development" />
            <p>
              Engenius Digitech offers comprehensive software development services that empower businesses to
              streamline operations and enhance productivity. Our dedicated team collaborates closely with
              clients to understand their unique requirements and deliver customized solutions. We utilize
              agile methodologies to ensure flexibility and efficiency throughout the development process.
              From mobile applications to enterprise software, our innovative approach guarantees high-quality,
              scalable products that meet industry standards. Trust us to turn your ideas into powerful software
              applications that drive growth and innovation for your business. Experience the difference with our
              tailored solutions designed for success.
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

      <footer></footer>
    </>
  );
};

export default It;
