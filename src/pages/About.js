import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <main className='section-center about'>
        <h2>About the Project</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
          laudantium vero iusto totam quasi explicabo perferendis ad non
          exercitationem doloribus consequuntur deserunt, esse numquam labore,
          vel aspernatur reiciendis. Quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
          laudantium vero iusto totam quasi explicabo perferendis ad non
          exercitationem doloribus consequuntur deserunt, esse numquam labore,
          vel aspernatur reiciendis. Quidem.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default About;
