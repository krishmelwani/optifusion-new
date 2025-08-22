import { useEffect } from "react";
import './css/partners.css'
import  internshipStudio from '/public/companyLogo/internshipStudio.jpg'
import  talento from '/public/companyLogo/Talento.png'
import  vertex from '/public/companyLogo/skill vertex.jpg'
import  scalar from '/public/companyLogo//scalar.jpg'
import  imarticus from '/public/companyLogo/imarticus.jpg'


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
    <section className="partners  bg-muted/20" aria-labelledby="partners-heading">
      <h2 id="partners-heading" className="visually-hidden">
        Our Partners
      </h2>

      {/* Talent Partners */}
      <div className="partners-group" aria-labelledby="talent-partners">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h3 id="talent-partners">Talent Partners</h3>
        </div>
        <ul className="logo-grid" role="list">
          <li className="logo-item fade-up hover-lift">
            <img
              src={talento}
              alt="Talento"
            />
          </li>
          <li className="logo-item fade-up hover-lift">
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
          <li className="logo-item fade-up hover-lift">
            <img
              src={vertex}
              alt="SkillVertex"
            />
          </li>
          <li className="logo-item fade-up hover-lift">
            <img
              src={imarticus}
              alt="imarticus"
            />
          </li>
          <li className="logo-item fade-up hover-lift">
            <img
              src={scalar}
              alt="Scalar"
            />
          </li>
        </ul>
      </div>

      {/* HR Tech Partners */}
      {/* <div className="partners-group" aria-labelledby="hr-tech-partners">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h3 id="hr-tech-partners">HR Tech Partners</h3>
        </div>
        <ul className="logo-grid" role="list">
          <li className="logo-item fade-up">
            <img
              src="https://dummyimage.com/200x80/ff9955/fff.png&text=HRMS+Cloud"
              alt="HRMS Cloud"
            />
          </li>
         
        </ul>
      </div> */}
    </section>
  );
};

export default PartnersSection;
