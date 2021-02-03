import React from "react"
import { Link } from "gatsby"

const MdxTabs = ({ content }) => {
    return (
        <nav >
            {content.map((item, i) => (
                <Link key={i}  to={item.url}>
                    {item.title}
                </Link>
            ))}

        </nav>
    );
};
export default MdxTabs;


//<MdxTabs content={[{"title": "Le concept", "url": "/foodelles"},
// {"title": "Nos engagements", "url": "/pages/rse-engagment"}, 
//{"title": "Fonctionnement", "url": "/pages/fonctionnement"}]} /> et ça s'escrit comme ça plus ou moins dans le toblock
//<nav className="MdxTabs-tabs">
//<Link key={i} className="nav-item nav-link" activeClassName="active" to={item.url}>
// Json.stringify toblock
//Json.parse pour la partie formblock aussi 