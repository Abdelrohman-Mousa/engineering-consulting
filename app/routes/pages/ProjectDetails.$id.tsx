import { useParams } from "react-router-dom";
import projectsData from "../../../src/data/projectsData";
import './projectDetails.scss';
import {ShinyButton} from "~/components/ui/shiny-button";
import { Link } from "react-router-dom";

const ProjectDetailsId = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === Number(id));

    if (!project) return <h2>Project not found</h2>;

    return (
        <div className="project-details">
            <div className="grid-container">
                {/*LEFT*/}
                <div className="left-section">
                    {/*HERO*/}
                   <div className="hero-section">
                       <div className="hero-img">
                           <img src={project.image} alt={project.name} />
                       </div>
                       <div className="hero-text">
                           <p>{project.description}</p>
                       </div>
                   </div>
                    {/*Explore*/}
                    <div className="explore-section">
                        <div className="project-description card">
                            <div className="description-title">
                                <h1>Project Description</h1>
                            </div>
                            <div className="description-content">
                                <p>{project.big_Description}</p>
                            </div>
                            <div className="description-btn">
                                <ShinyButton className="button">Request Consultation</ShinyButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/*RIGHT*/}
                <div className="right-section">
                    <div className="card stats">
                        <div className="stats-grid">
                            {/*1*/}
                            <div className="stats-card">
                                <div className="title-icon">
                                    <p>Project Name</p>
                                    <div className="icon">
                                      <img src="/assets/icons/pen.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{project.name}</h1>
                            </div>
                            {/*2*/}
                            <div className="stats-card">
                                <div className="title-icon">
                                    <p>Project Category</p>
                                    <div className="icon">
                                        <img src="/assets/icons/category1.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{project.category}</h1>
                            </div>
                            <div className="stats-card">
                                <div className="title-icon">
                                    <p>Client</p>
                                    <div className="icon">
                                        <img src="/assets/icons/client.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{project.client}</h1>
                            </div>
                            <div className="stats-card">
                                <div className="title-icon">
                                    <p>Location</p>
                                    <div className="icon">
                                        <img src="/assets/icons/location-1.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{project.location}</h1>
                            </div>
                        </div>
                    </div>


                    {/*project-supervisors*/}
                    <div className="project-supervisors card">
                       <div className="supervisors-title">
                           <h1>Project Supervisors</h1>
                       </div>
                        <div className="supervisors-grid">
                            <div className="supervisor-card">
                                <div className="supervisor-img">
                                    <img src={project.projectSupervisor_img_1} alt="supervisor" />
                                    <div className="supervisor-info">
                                        <p>{project.projectSupervisor_name_1}</p>
                                        <span><strong>Role:</strong> {project.projectSupervisor_role_1}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="supervisor-card">
                                <div className="supervisor-img">
                                    <img src={project.projectSupervisor_img_2} alt="supervisor" />
                                    <div className="supervisor-info">
                                        <p>{project.projectSupervisor_name_2}</p>
                                        <span><strong>Role:</strong> {project.projectSupervisor_role_2}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="supervisor-card">
                                <div className="supervisor-img">
                                    <img src={project.projectSupervisor_img_3} alt="supervisor" />
                                    <div className="supervisor-info">
                                        <p>{project.projectSupervisor_name_3}</p>
                                        <span><strong>Role:</strong> {project.projectSupervisor_role_3}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="supervisors-btn">
                            <Link to="/contact">
                              <ShinyButton>Contact Us</ShinyButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsId;