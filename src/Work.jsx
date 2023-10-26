import React from 'react';
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
      websiteUrl: "https://hire-frontend.onrender.com/",
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
      name: "Book Finder",
      description: " A simple web Where one can search, explore, and read books.",
      websiteUrl: "https://book-finder-uahe.onrender.com/",
      githubUrl: "https://github.com/yourusername/bookfinder",
      imageUrl: "https://media.npr.org/assets/img/2022/12/22/gettyimages-1245203807-1536x1029_wide-9982607ca51f99999656d993bf5511d42533c0f2-s1100-c50.jpg",
    },
    {
      name: "Hire Groove Backend",
      description: "A web application backend for showcasing tech job opportunities.",
      websiteUrl: "https://hire-backend.onrender.com/",
      githubUrl: "https://github.com/jamesirungume/Hire_Grove_backend/tree/main",
      imageUrl: "https://media.gcflearnfree.org/content/55e0740a7dd48174331f51c4_01_17_2014/JobApplications_CompletingJobApp_p1.jpg",
    },
    // Add more projects with their details and images
  ];

  const openWebsite = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='Work'>
      <h1 id="project_header">My Projects.</h1>
      <div className='line4'></div>
      <section className="work-section">
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
