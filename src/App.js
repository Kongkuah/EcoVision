import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Success";
import "./App.css";

function Home() {
  return (
    <div className="App">
      {/* Banner Section */}
      <div className="banner">
        <img
          src={process.env.PUBLIC_URL + "/boris-misevic-QsnOdVoBdrA-unsplash.jpg"}
          alt="Lush green forest"
          className="banner-image"
        />
      </div>
      <header>
        <img
          src={process.env.PUBLIC_URL + "/logo-transparent.png"}
          alt="EcoVision Logo"
          className="logo"
        />
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#location">Location & Contact</a>
        </nav>
      </header>
      <main>
        {/* About Section */}
        <section id="about" className="section about-section">
          <h1>EcoVision Sustainability Institute</h1>
          <p>
            EcoVision Sustainability Institute undertakes grant-funded research,
			academic and applied studies, and offers consultancy, training,
			and technical services to clients in government, academia, NGOs,
			and the private sector.
			The company also seeks and manages sponsorships and grants to support independent research,
			and undertakes commissioned projects for organizations interested in advancing sustainability.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <h2>Our Services</h2>
          <ul>
            <li>Sustainability consulting and policy advisory</li>
            <li>Research and impact assessments</li>
            <li>Capacity building and training</li>
            <li>Grant-funded research and strategic partnerships</li>
          </ul>
        </section>

        {/* Location & Contact */}
        <section id="location" className="section">
          <h2>Location & Contact</h2>
          <p>
            <strong>Office:</strong> Accra, Ghana<br />
            <strong>Email:</strong> info@ecovisiongh.com<br />
            <strong>Phone:</strong> +233 24 762 3464
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
          >
            {/* Netlify Hidden Input */}
            <input type="hidden" name="form-name" value="contact" />
            <h3>Contact Us</h3>
            <input type="text" name="name" placeholder="Your Name" required /><br />
            <input type="email" name="email" placeholder="Your Email" required /><br />
            <textarea name="message" placeholder="Your Message" required></textarea><br />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} EcoVision Sustainability Institute. All rights reserved.
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
