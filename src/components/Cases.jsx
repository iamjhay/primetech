import React from "react";
import { NavLink } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    subtitle: "Design",
    title: "Get unlimited access to the world's most dependable design team.",
    img: "prime-tech",
    link: "/web-design",
    btn: "View More",
  },
  {
    id: 2,
    subtitle: "Development",
    title:
      "Create your project today and get your Brand tomorrow. It's that simple.",
    img: "prime-awesome",
    link: "/web-development",
    btn: "View More",
  },
  {
    id: 3,
    subtitle: "Consultancy",
    title: "Getting started with your digital strategy has never been easier.",
    img: "prime-help",
    link: "/request-quote",
    btn: "Get Started",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="row overflow-hidden">
          {caseStudies.map((caseItem) => (
            <NavLink to={caseItem.link} className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
                <div className="case-button">
                  <p className="button">{caseItem.btn}</p>
                </div>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
