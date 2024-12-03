import React from "react";
import "./App.css";
import ProjectCard from "./ProjectCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="animated-text">My Portfolio</h1>
        <p className="animated-text">
          Welcome to my portfolio. Below is a project I've worked on and some more details about me!
        </p>
      </header>
      
      <main>
        {/* About Section */}
        <section className="about-section animated-text">
          <h2>About Me</h2>
          <p>
            Hi! I am <strong>Ishwar Tejrao Harbade</strong>, a passionate and motivated{" "}
            <strong>Full Stack Java Developer</strong> with a strong foundation in Java, OOPS concepts, and web
            development frameworks such as Spring, Spring Boot, and Hibernate. I am currently seeking opportunities in
            Full Stack Java Development and am eager to apply my skills to solve real-world challenges.
          </p>
          <p>
            I hold a Bachelor's degree in Mechanical Engineering from{" "}
            <strong>Umrer College of Engineering, Nagpur</strong>, and have developed a keen interest in software
            development, particularly backend technologies. My professional journey started as a <strong>Process
            Analyst</strong> at <strong>Gallagher Service Center LLP</strong>, where I worked with insurance
            operations, followed by an internship as a Full Stack Java Intern, where I honed my skills in Java, SQL,
            Web Services, Microservices, and various Java-based frameworks.
          </p>
          <p>
            In my free time, I work on various Java-based projects such as <strong>HomeLoan Backend Project </strong>{" "}
            <strong>Bank Management System</strong>, <strong>Institute Management System</strong>. These projects have
            allowed me to practice the core concepts of Java, exception handling, CRUD operations, and object-oriented
            programming (OOP) principles.
          </p>
          <p>
            I am currently looking for an opportunity as a <strong>Full Stack Java Developer</strong>, where I can
            continue to learn, grow, and contribute to building efficient, scalable, and user-friendly applications.
          </p>
          <p>Feel free to check out my projects and skills on this portfolio, and let's connect!</p>
        </section>

        {/* Educational Background Section */}
        <section className="education-section animated-text">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Umrer College Of Engineering</h3>
            <p><strong>Degree:</strong> Bachelor's in Mechanical Engineering</p>
            <p><strong>Year of Graduation:</strong> 09/2018</p>
            <p><strong>CGPA:</strong> 8.53</p>
            <p><strong>Location:</strong> Nagpur, Maharashtra</p>
          </div>
          <div className="education-item">
            <h3>Prerna Junior College</h3>
            <p><strong>Stream:</strong> Electronics</p>
            <p><strong>Year of Completion:</strong> 02/2014</p>
            <p><strong>Percentage:</strong> 78.62%</p>
            <p><strong>Location:</strong> Nagpur, Maharashtra</p>
          </div>
          <div className="education-item">
            <h3>Shree Gajanan Vidyalaya</h3>
            <p><strong>Class:</strong> Secondary School</p>
            <p><strong>Year of Completion:</strong> 03/2012</p>
            <p><strong>Percentage:</strong> 85.64%</p>
            <p><strong>Location:</strong> Nagpur, Maharashtra</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section animated-text">
          <h2>Skills</h2>
          <ul>
            <li>Frontend: HTML, CSS, JavaScript, React.js</li>
            <li>Backend: Eclipse </li>
            <li>Version Control: Git, GitHub</li>
            <li>Other: RESTful APIs, SQL</li>
          </ul>
        </section>

        {/* Looking For Opportunity Section */}
        <section className="opportunity-section animated-text">
          <h2>Looking for Full Stack Developer Opportunities</h2>
          <p>
            I am currently looking for a position as a Full Stack Developer. If you're looking for someone passionate
            and skilled, feel free to contact me!
          </p>
        </section>

        {/* Projects Section */}
        <div className="projects-container">
          <h2>My Projects</h2>
          <ProjectCard
            title="Personal Website"
            description="A personal Backend Homeloan Project built using Javas."
            link="https://github.com/ishwar181818/Project_Loan" // Replace with your actual GitHub link
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvqzKeOrYRSHCXOnnCHI94AswsBHl4Zo4BQ&s" // Replace with an actual image URL
          />
        </div>
      </main>
      
      <footer>
        <p>Made with ❤️ by Ishwar Tejrao Harbade</p>
      </footer>
    </div>
  );
}

export default App;
