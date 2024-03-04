import '../../styles/works.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
export default function Works() {
  const projects = [
    {
      id: 1,
      title: 'Graphien',
      description:
        '"Duo-lingo" for learning how to write. Winning product at the Tampa BayHacks 2024.',
      url: 'https://github.com/surajshivkumar/Graphien',
      linkedinurl:
        'https://www.linkedin.com/feed/update/urn:li:activity:7168360755464007680/',
    },
    {
      id: 2,
      title: 'AutoWise',
      description: 'AI powered - Used Car Marketplace.',
      url: 'https://github.com/surajshivkumar/Used-car-price',
      linkedinurl:
        'https://www.linkedin.com/posts/suraj-shivakumar_datamining-machinelearning-usedcars-activity-7162264929570373632-dzhQ/?utm_source=share&utm_medium=member_desktop',
    },
    {
      id: 3,
      title: 'Yog.AI',
      description: 'Learn yoga with AI.',
      url: '',
      linkedinurl:
        'https://www.linkedin.com/feed/update/urn:li:activity:6833261747680497664/',
    },
    {
      id: 4,
      title: 'State Of The Region',
      description: 'The 2024 Tampa Bay State of the region e-insights report',
      url: 'https://stateoftheregion.com/',
    },
    // Add more projects as needed
  ]

  return (
    <section id="Works">
      <h1 className="heading">Selected Projects</h1>
      <div className="flexContainer">
        {projects.map((project) => (
          <div key={project.id} className="thumbnail">
            <div className="thinLine"></div>
            {/* <img src={project.imageUrl} alt={project.title} /> */}
            <div className="textBox">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="icon-container">
                <a href={project.url}>
                  <FaGithub className="cursor-pointer hover:text-white" />
                </a>
                <a href={project.linkedinurl}>
                  <FaLinkedin className="cursor-pointer hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
