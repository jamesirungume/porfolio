


import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


const WorkSection = () => {
  const projects = [
     {
      name: "Lost & Found",
      description: "App where people within an instution can report lost items and get report back if they are found.",
      websiteUrl: "https://lost-front.vercel.app/",
      githubUrl: "https://github.com/jamesirungume/Lost_front",
      imageUrl: "https://i.pinimg.com/564x/1c/d7/1e/1cd71ecf36f14cb9abab68e4def29618.jpg",
    },
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
      name: "Bot Army",
      description: "Upon loading the app, you will see a collection of bots displayed. Each bot has a 'View Details' button that allows you to view detailed specifications of that particular bot.",
      websiteUrl: "",
      githubUrl: "https://github.com/jamesirungume/BOTS-APP-CODE-CHALLENGE",
      imageUrl: "https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=",
    },
    
    {
      name: "Hire Groove Backend",
      description: "App where people within an instution can report lost items and get report back if they are found.",
      websiteUrl: "https://hire-backend.onrender.com/",
      githubUrl: "https://github.com/jamesirungume/Hire_Grove_backend/tree/main",
      imageUrl: "https://media.gcflearnfree.org/content/55e0740a7dd48174331f51c4_01_17_2014/JobApplications_CompletingJobApp_p1.jpg",
    },

    {
      name: "Lost & Found Backend",
      description: "A web application backend for showcasing tech job opportunities.",
      websiteUrl: "https://lost-backend.onrender.com/",
      githubUrl: "https://github.com/jamesirungume/Lost-Backend",
      imageUrl: "https://i.pinimg.com/564x/1c/d7/1e/1cd71ecf36f14cb9abab68e4def29618.jpg",
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
      <div className='line3'></div>
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

