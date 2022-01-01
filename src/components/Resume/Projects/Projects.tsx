import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import resume from "../../../data/resume.json";

const Projects = (): ReactElement => {
    const projects = resume.projects.list;

    return (
        <>
            <h2 className="section-title">
                Projects{` `}
                <span role="img" aria-label="Construction">
                    🏗️
                </span>
            </h2>
            <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
                I also give each project a write-up! Read more about them{" "}
                <Link to="/projects">here</Link>.
            </h5>
            <div className="section">
                {projects.map((proj, i) => {
                    const character = ``;
                    const triggerTitle = (
                        <>
                            <div className="item"></div>
                            <h3 className="entry-title">
                                {proj.name}, <i>{proj.tag}</i> {character}
                            </h3>
                        </>
                    );
                    return (
                        <Collapsible
                            key={i}
                            trigger={triggerTitle}
                            transitionTime={300}
                            easing="ease-in-out"
                        >
                            <div className="entry" key={i}>
                                <h5>
                                    {proj.location}—{proj.startDate} to{" "}
                                    {proj.endDate}
                                </h5>
                                <ul className="description">
                                    {proj.description.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>;
                                    })}
                                </ul>
                                <div className="techstack">
                                    {proj.technologies.map((tech, i) => {
                                        return (
                                            <div key={i} className="tech">
                                                {tech}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Collapsible>
                    );
                })}
            </div>
        </>
    );
};

export default Projects;