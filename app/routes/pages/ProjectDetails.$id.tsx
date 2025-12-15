import { useParams } from "react-router-dom";
import projectsData from "../../../src/data/projectsData";
import './projectDetails.scss';
import {ShinyButton} from "~/components/ui/shiny-button";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const ProjectDetailsId = () => {
    const { t } = useTranslation();

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
                           <p>{t(project.description)}</p>
                       </div>
                   </div>
                    {/*Explore*/}
                    <div className="explore-section">
                        <div className="project-description card">
                            <div className="description-title">
                                <h1>{t("descriptionLabel")}</h1>
                            </div>
                            <div className="description-content">
                                <p>{t(project.big_Description)}</p>
                            </div>
                            <div className="description-btn">
                                <ShinyButton className="button">{t("button-hero-section")}</ShinyButton>
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
                                    <p>{t("nameLabel")}</p>
                                    <div className="icon">
                                      <img src="/assets/icons/pen.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{t(project.name)}</h1>
                            </div>
                            {/*2*/}
                            <div className="stats-card">
                                <div className="title-icon">
                                    <p>{t("categoryLabel")}</p>
                                    <div className="icon">
                                        <img src="/assets/icons/category1.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{t(project.category)}</h1>
                            </div>
                            <div className="stats-card">
                                <div className="title-icon">
                                    <p>{t("clientLabel")}</p>
                                    <div className="icon">
                                        <img src="/assets/icons/client.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{t(project.client)}</h1>
                            </div>
                            <div className="stats-card">
                                <div className="title-icon">
                                    <p>{t("locationLabel")}</p>
                                    <div className="icon">
                                        <img src="/assets/icons/location-1.svg" alt="project-name" />
                                    </div>
                                </div>
                                <h1 className="basic-title">{t(project.location)}</h1>
                            </div>
                        </div>
                    </div>


                    {/*project-supervisors*/}
                    <div className="project-supervisors card">
                       <div className="supervisors-title">
                           <h1>{t("supervisorsTitle")}</h1>
                       </div>
                        <div className="supervisors-grid">
                            {project.supervisors.map((sup, index) => (
                                <div className="supervisor-card" key={index}>
                                    <div className="supervisor-img">
                                        <img src={sup.image} alt="supervisor" />

                                        <div className="supervisor-info">
                                            <p>{t(sup.name)}</p>

                                            <span><strong>{t("roleLabel")}:</strong> {t(sup.role)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="supervisors-btn">
                            <Link to="/contact">
                                <ShinyButton>{t("ContactUs")}</ShinyButton>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsId;