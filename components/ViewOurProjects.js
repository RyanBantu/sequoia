import Image from "next/image";
import React from "react";



const ViewOurProjects = () => {
  return (
    <div className="view__our__projects">
      <div className="projects__header">
        <h1>View our Projects</h1>
        <hr className="projects_hr"/>
      </div>
      <div className="projects">
        <div className="project">
          <div className="image">
            <Image
              className="img"
              src="/img/projectsImage.jpg"
              alt="Laundry with beatifull Vinyl Floor"
              width={1000}
              height={700}
              quality={100}
            />
          </div>
          <div className="project__info">
          <h1>Premium Tile Installation Project</h1>
            <p>
              This complete project showcases our commitment to premium tile installations.
              We supplied high-quality floor and wall tiles with exceptional value. Our direct-from-manufacturer
              model provided below-market pricing without compromising on quality, ensuring on-time delivery
              and customer satisfaction throughout the project.
            </p>
            <div className="project__buttons">
              {/* <a href='#' className='blue__link'>
								Case Study
							</a> */}
              <a href="/gallery" className="red__button">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <Image
              className="img"
              src="/img/projectsImage2.jpg"
              alt="Livingroom with beatifull Vinyl Floor"
              width={800}
              height={700}
              quality={100}
            />
          </div>
          <div className="project__info">
          <h1>Commercial Tile Installation</h1>
            <p>
              This commercial project demonstrates our expertise in large-scale tile installations. 
              With access to 15 manufacturing units and massive production capacity, we delivered
              premium tiles on schedule for this extensive project. Our focus on quality and reliability
              ensures client satisfaction from start to finish.
            </p>
            <div className="project__buttons">
              {/* <a href='#' className='blue__link'>
								Case Study
							</a> */}
              <a href="/gallery" className="red__button">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOurProjects;
