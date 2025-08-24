import { useEffect } from "react";
import './css/partners.css'
import  internshipStudio from '/public/companyLogo/internshipStudio.jpg'
import  talento from '/public/companyLogo/Talento.png'
import  vertex from '/public/companyLogo/skill vertex.jpg'
import  scalar from '/public/companyLogo//scalar.jpg'
import  imarticus from '/public/companyLogo/imarticus.jpg'
import vakilSearch from '/public/companyLogo/vakil search.jpg'
import simpliance from '/public/companyLogo/simpliance.jpg'

const PartnersSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Talent Partners */}
      <div className="partners-group" aria-labelledby="talent-partners">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h3 id="talent-partners">Talent Partners</h3>
        </div>
        <ul className="logo-grid" role="list">
          <li className="logo-item fade-up ">
            <img
              src={talento}
              alt="Talento"
            />
          </li>
          <li className="logo-item fade-up">
            <img
              src={internshipStudio}
              alt="Internship Studios"
            />
          </li>
          
        </ul>
      </div>

      {/* Training & Upskilling Partners */}
      <div className="partners-group" aria-labelledby="training-partners">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h3 id="training-partners">Training & Upskilling Partners</h3>
        </div>
        <ul className="logo-grid " role="list">
          <li className="logo-item fade-up ">
            <img
              src={vertex}
              alt="SkillVertex"
            />
          </li>
          <li className="logo-item fade-up">
            <img
              src={imarticus}
              alt="imarticus"
            />
          </li>
          <li className="logo-item fade-up">
            <img
              src={scalar}
              alt="Scalar"
            />
          </li>
        </ul>
      </div>

      {/* HR Tech Partners */}
      <div className="partners-group" aria-labelledby="hr-tech-partners">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h3 id="hr-tech-partners">Legal & Compliance Advisory Partners</h3>
        </div>
        <ul className="logo-grid" role="list">
          <li className="logo-item fade-up">
            <img
              src={vakilSearch}
              alt="vakil search"
            />
             </li>
          <li className="logo-item fade-up">
            <img
              src={simpliance}
              alt="simpliance"
            />
          </li>
         
        </ul>
      </div>
   </>
  );
};

export default PartnersSection;
