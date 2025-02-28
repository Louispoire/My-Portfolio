import './Projects.css';
import './Projects2.css';
import { motion } from 'framer-motion';
import counterIcon from '../../assets/swift_counter_icon.png';
import simdevWebsite from '../../assets/simdev_website.png';

const projects = [
  { title: "Swift Counter", description: "A cool project.", bgColor: "#ff7c7c", image: simdevWebsite },
  { title: "Project Two", description: "Another great one.", bgColor: "#6c5ce7", image: counterIcon },
];

function Projects() {
  return (
    <div>
      <section>
        <div class="projects-container">
          <div class="tile">
            <img src={simdevWebsite}/>
          </div>
          <div class="tile">
            <img src={counterIcon}/>
          </div>

          {
          /* FOR FUTURE USE
          <div class="tile">
          </div>
          <div class="tile">
          </div>
          <div class="tile">
          </div>
          */
          }
        </div>
      </section>
    </div>
  );
}

export default Projects;