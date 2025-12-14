import './project.scss';
import ButtonFilter from "../../../src/material-ui/ButtonFilter";
import { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../../../src/data/projectsData";
import {ShinyButton} from "~/components/ui/shiny-button";
import {useTranslation} from "react-i18next";


const Projects = () => {
    const { t } = useTranslation();

    const [activeCategory, setActiveCategory] = useState("All");


    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter((proj) => proj.category === activeCategory);


    return (
        <div className="projects">
            <div className="projects-head">
                <div className="projects-text">
                    Completed Projects <span>+85</span>
                </div>

                <div className="projects-filter">
                    <span>"Use the filter to view your preferred project type."</span>
                    <ButtonFilter onSelect={setActiveCategory} />
                </div>
            </div>

            <div className="projects-content">
                {filteredProjects.map((proj) => (
                    <div className="projects-card" key={proj.id}>
                        <div className="projects-card-img">
                            <img src={proj.image} alt={proj.name} />
                        </div>
                        <div className="projects-card-text">
                            <div className="projects-card-text-content">
                                <h3>{t(proj.name)}</h3>
                                <span>{proj.category}</span>
                            </div>
                            <div className="project-card-button">
                                <Link to={`/projectsDetails/${proj.id}`}>
                                    <ShinyButton>View Details</ShinyButton>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
