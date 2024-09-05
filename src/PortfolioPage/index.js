import React from 'react';
import './index.css';
const portfolios = [
  {
    name: 'Faith Wachira',
    profilePic: 'Images/Faith.jpg',
    about: 'The forest ecosystem is home to a wide variety of forests which plays a crucial role in ecological balance. This fragile ecosystem is facing numerous challenges such as loss of forest cover threatening their delicate balance and overall sustainability. Faith is determined to leverage AI-powered analytics to assess changes in forest health by detecting the forest areas that are at risk, enabling focused conservation and restoration activities thus protecting our mountain ecosystem for future generations.',
    skills: ['Sketch', 'Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    education: ['Diploma in IT. AKiraChix, codeHive class of 2024'],
    projects: [
      'MitushConnect',
      'Calculator',
      'Crypto Tracker'
    ]
  },
  {
    name: 'Yvonne Katumbi',
    profilePic: 'Images/Leila.jpg',
    about: 'In a world where every click and swipe carries the potential for financial exchange, the integrity of digital transactions is under constant siege from increasingly sophisticated cyber threats. Yvonne believes that the convergence of advanced technologies like Machine Learning and Artificial Intelligence is pivotal in safeguarding our digital financial ecosystems. She is passionate about harnessing these cutting-edge tools to fortify defenses against cyber attacks, ensuring that financial systems remain secure and trustworthy.',
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
    education: ['Diploma in IT. AKiraChix, codeHive class of 2024'],
    projects: [
      'Developed an expense tracker'
    ]
  },
  {
    name: 'Aber Racheal',
    profilePic: 'Images/Racheal.jpg',
    about: 'With a passion for both music and technology, I specialize in creating engaging digital experiences using JavaScript and React. My work on projects like [briefly mention a relevant project] demonstrates my ability to merge technical expertise with creative vision. I am excited about the potential to innovate at the crossroads of tech and music, leveraging my skills to build dynamic applications that resonate with users.',
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
    education: ['Diploma in IT. AKiraChix, codeHive class of 2024'],
    projects: [
      'Developed a music web'
    ]
  },
  {
    name: 'Maureen Njeri',
    profilePic: 'Images/Nje.jpg',
    about: 'Maureen, a passionate healthcare innovator, firmly believes that the convergence of technology and systems thinking holds the guidelines to addressing the complex challenges facing the medical industry. Inspired by the remarkable progress in fields like telemedicine, data analytics, and artificial intelligence, Maureen is convinced that these advancements can be harnessed to bridge the gaps in healthcare delivery, ensuring that quality care reaches underserved communities and vulnerable populations. Leveraging her expertise in systems thinking and her deep passion for healthcare innovation, Maureen is committed to working alongside a diverse array of stakeholders to co-create solutions that can revolutionize the way healthcare is delivered and experienced, ultimately building a future where healthcare is more accessible, equitable, and effective for all.',
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
    education: ['Diploma in IT. AKiraChix, codeHive class of 2024'],
    projects: [
      'Developed a project to enhance parental involvement in online learning'
    ]
  },
  {
    name: 'Mary Vivian Muthoni',
    profilePic: 'Images/Vee.jpg',
    about: 'Mary, a software developer, envisions a future where software transcends being merely a tool and becoming a narrative-driven experience that deeply resonates with users. She aims to integrate cinematic storytelling techniques into mainstream software development, believing this approach can create software that captivates and inspires. Mary is committed to continuous learning, collaboration, and innovation to push the boundaries of what is possible. By blending the art of storytelling with science and technology, she strives to create software that not only meets functional needs but also engages users on a profound level, forging meaningful connections through innovative digital experiences.',
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
    education: ['Diploma in IT. AKiraChix, codeHive class of 2024'],
    projects: [
      'Developed a Econtrust mobile App'
    ]
  }
  // Add more portfolio entries with profile pictures...
];
const PortfolioSection = ({ portfolio }) => (
    <div className='main'>
  <article className="portfolio">
    <header className="portfolio-header">
      <div className="profile-container">
        <div className="profile-picture" style={{ backgroundImage: `url(${portfolio.profilePic})` }}></div>
        <div className="gradient-border"></div>
      </div>
      <h2>{portfolio.name}</h2>
    </header>
    <section className="portfolio-content">
      <div className="about">
        <h3>About</h3>
        <p>{portfolio.about}</p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {portfolio.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="education">
        <h3>Education</h3>
        <ul>
          {portfolio.education.map(edu => (
            <li key={edu}>{edu}</li>
          ))}
        </ul>
      </div>
      <div className="projects">
        <h3>Projects</h3>
        <ul>
          {portfolio.projects.map(project => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>
    </section>
  </article>
  </div>
);
const AllPortfolios = () => {
  return (
    <div className="all-portfolios">
      <header className="headerportfolio">
        <h1>Feature Articles: Portfolio Showcase</h1>
        <p>Explore detailed profiles of industry experts and their achievements.</p>
      </header>
      {portfolios.map((portfolio, index) => (
        <PortfolioSection key={index} portfolio={portfolio} />
      ))}
    </div>
    
  );
};
export default AllPortfolios;