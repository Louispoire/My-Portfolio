import './Projects.css';
import counterIcon from '../../assets/swift_counter_icon.png';
import simdevWebsite from '../../assets/simdev_website.png';
import Card from '../projects/Card';

const projects = [
  { title: "Swift Counter", description: "A cool project.", bgColor: "#ff7c7c", image: simdevWebsite },
  { title: "Project Two", description: "Another great one.", bgColor: "#6c5ce7", image: counterIcon },
  { title: "Swift Counter", description: "A cool project.", bgColor: "#ff7c7c", image: simdevWebsite },
  { title: "Project Two", description: "Another great one.", bgColor: "#6c5ce7", image: counterIcon },
  { title: "Swift Counter", description: "A cool project.", bgColor: "#ff7c7c", image: simdevWebsite },
  { title: "Project Two", description: "Another great one.", bgColor: "#6c5ce7", image: counterIcon },
  { title: "Swift Counter", description: "A cool project.", bgColor: "#ff7c7c", image: simdevWebsite },
  { title: "Project Two", description: "Another great one.", bgColor: "#6c5ce7", image: counterIcon },
  { title: "Swift Counter", description: "A cool project.", bgColor: "#ff7c7c", image: simdevWebsite },
  { title: "Project Two", description: "Another great one.", bgColor: "#6c5ce7", image: counterIcon },
];

function Projects() {
  return (
    <div className='.projects-card-container'>
      <div>
        <h1>My projects</h1>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            yearBuilt={project.yearBuilt}
            location={project.location}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;