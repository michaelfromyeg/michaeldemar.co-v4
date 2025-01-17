import React, { ReactElement } from "react";
import { Link } from "gatsby";

import Toggle from "../Toggle/Toggle";

import * as styles from "./Links.module.scss";

export enum Locations {
    HOMEPAGE,
    POSTS,
}

export const Destinations = [
    {
        name: "blog",
    },
    {
        name: "projects",
    },
    {
        name: "design",
    },
    {
        name: "travel",
    },
    {
        name: "music",
    },
    {
        name: "about",
    },
];

interface InnerLinksProps {
    location: Locations;
}

const InnerLinks = (props: InnerLinksProps): ReactElement => {
    const { location } = props;
    const prefix = location === Locations.HOMEPAGE ? "homepage" : "";

    const EMOJIS = ["🤠", "🐢", "👾", "🤖", "⚡", "🦅", "🦕", "🐧"];
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    return (
        <div className={styles[`${prefix}Links`]}>
            <Link className={styles.headerLink} to={"/"}>
                <h1 className={styles[`${prefix}Title`]}>
                    <span style={{ marginRight: 5 }}>{emoji}</span>
                    michaeldemar.co
                </h1>
            </Link>
            <div className={styles.linksAndLights}>
                {Destinations.map((d, index) => {
                    return (
                        <Link
                            key={index}
                            className={styles[`${prefix}Link`]}
                            to={`/${d.name}`}
                        >
                            [{d.name}]
                        </Link>
                    );
                })}
                {location !== Locations.HOMEPAGE && <br />}
            </div>
            <Toggle location={location} />
        </div>
    );
};

interface LinksProps {
    location: Locations;
}

const Links = (props: LinksProps): ReactElement => {
    const { location } = props;
    switch (location) {
        case Locations.HOMEPAGE:
            return (
                <div className={styles.homepageWrapper}>
                    <InnerLinks location={location} />
                </div>
            );
        case Locations.POSTS:
            return <InnerLinks location={location} />;
        default:
            throw new Error(`Invalid location given in Links.tsx`);
    }
};

export default Links;
