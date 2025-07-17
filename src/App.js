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
            EcoVision Sustainability Institute is a consulting firm specializing in environmental economics,
            sustainability, and policy advisory. We empower governments, businesses,
            and organizations to build a greener, more resilient future through
            evidence-based solutions and strategic partnerships.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <h2>Our Services</h2>
          <ul>
            <li>Environmental economics consulting and policy advisory</li>
            <li>Research, economic modelling, and impact assessments</li>
            <li>Climate resilience and sustainability strategy</li>
            <li>Marine & fisheries sustainability projects</li>
            <li>Capacity building and training programs</li>
          </ul>
        </section>

        {/* Location & Contact */}
        <section id="location" className="section">
          <h2>Location & Contact</h2>
          <p>
            <strong>Office:</strong> Accra, Ghana<br />
            <strong>Email:</strong> info@ecovisiongh.com<br />
            <strong>Phone:</strong> +233 024 234 2588
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
