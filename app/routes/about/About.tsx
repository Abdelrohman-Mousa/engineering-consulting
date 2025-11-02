import type { Route } from "./+types/About";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About US" },
        { name: "description", content: "About Us" },
    ];
}

import './about.scss';

const About = () => {
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}
export default About
