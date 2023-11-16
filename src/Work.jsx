


import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


const WorkSection = () => {
  const projects = [
    {
      name: "Fit Buddy",
      description: "A Developed top-tier fitness web app for personalized workout and nutrition plans.",
      websiteUrl: "https://hawamariah.github.io/Fit-Buddy/",
      githubUrl: "https://github.com/jamesirungume/Fit_budddy",
      imageUrl: "https://gymbody.pro/wp-content/uploads/2023/08/fitness.jpg",
    },
    {
      name: "Hire Groove",
      description: "A web application where one can apply and showcase tech job opportunities.",
      websiteUrl: "https://hire-grove.vercel.app/",
      githubUrl: "https://github.com/jamesirungume/Hire_Grove_frontend/tree/main",
      imageUrl: "https://media.gcflearnfree.org/content/55e0740a7dd48174331f51c4_01_17_2014/JobApplications_CompletingJobApp_p1.jpg",
    },
    {
      name: "Photogenic",
      description: "Photographer's Hub: Share, Connect, and Get Hired!",
      websiteUrl: "https://photogenic-app.onrender.com/#/Documenting",
      githubUrl: "https://github.com/jamesirungume/photogenic-app/tree/tempbr",
      imageUrl: "https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380",
    },
    {
      name: "Lost & Found",
      description: "App where people within an instution can report lost items and get report back if they are found.",
      websiteUrl: "https://lost-and-found-eight.vercel.app/",
      githubUrl: "https://github.com/jamesirungume/lost-found",
      imageUrl: "https://i.pinimg.com/564x/1c/d7/1e/1cd71ecf36f14cb9abab68e4def29618.jpg",
    },
    {
      name: "Hire Groove Backend",
      description: "A web application backend for showcasing tech job opportunities.",
      websiteUrl: "https://hire-backend.onrender.com/",
      githubUrl: "https://github.com/jamesirungume/Hire_Grove_backend/tree/main",
      imageUrl: "https://media.gcflearnfree.org/content/55e0740a7dd48174331f51c4_01_17_2014/JobApplications_CompletingJobApp_p1.jpg",
    },
    
  ];

  const [animate, setAnimate] = useState(false);
  const workSectionRef = useRef(null);

  const openWebsite = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
        else if (!entries[0].isIntersecting) {
          setAnimate(false)
        }
      },
      { threshold: 0.2 } // Modify the threshold as needed
    );

    if (workSectionRef.current) {
      observer.observe(workSectionRef.current);
    }

    return () => {
      if (workSectionRef.current) {
        observer.unobserve(workSectionRef.current);
      }
    };
  }, []);

  return (
    <div className='Work' ref={workSectionRef}>
      <h1 id="project_header">My Projects.</h1>
      <div className='line4'></div>
      <section className={`work-section ${animate ? 'moveIn' : 'move-off-Screen'}`}>
        {projects.map((project, index) => (
          <div className="work-box" key={index}>
            <h3 className="project_class">{`0${index + 1}. ${project.name}`}</h3>
            <div className='image-container'>
              <img src={project.imageUrl} alt={project.name} className='Work_image' />
              <div className='overlay'>
                <p>{project.description}</p>
                <button onClick={() => openWebsite(project.websiteUrl)}>
                  View Website <AiOutlineArrowRight />
                </button>
                <button onClick={() => openWebsite(project.githubUrl)}>
                  Github Source <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WorkSection;

