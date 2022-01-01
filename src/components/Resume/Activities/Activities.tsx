import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import resume from "../../../data/resume.json";

const Activities = (): ReactElement => {
    const activities = resume.activities.list;

    return (
        <>
            <h2 className="section-title">
                Activities{` `}
                <span role="img" aria-label="Man running">
                    🏃‍♂️
                </span>
            </h2>
            <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
                Read more about ways {`I'm`} getting involved{" "}
                <Link to="/blog">here</Link>.
            </h5>
            <div className="section">
                {activities.map((activity, i) => {
                    const character = ``;
                    const triggerTitle = (
                        <>
                            <div className="item"></div>
                            <h3 className="entry-title">
                                {activity.title} @ <i>{activity.organization}</i>{" "}
                                {character}
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
                                    {activity.location}—{activity.startDate} to{" "}
                                    {activity.endDate}
                                </h5>
                                <ul className="description">
                                    {activity.description.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>;
                                    })}
                                </ul>
                                <div className="techstack">
                                    {activity.skills.map((skill, i) => {
                                        return (
                                            <div key={i} className="tech">
                                                {skill}
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

export default Activities;