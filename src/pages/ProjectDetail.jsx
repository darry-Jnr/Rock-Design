import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from '../data/projectData';
import { Helmet } from 'react-helmet';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-blue-500 underline">Go back</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Rock Dezign</title>
      </Helmet>

      <div className="max-w-5xl mx-auto p-6 mt-[80px]">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex gap-4 text-gray-600 mb-6">
          <span>Year: {project.year}</span>
          <span>Country: {project.country}</span>
        </div>
        <img
          src={project.image.replace(/'/g, '')}
          alt={project.title}
          className="w-full h-[400px] object-cover mb-6"
        />
        <p className="text-gray-700 text-lg">
          {/* Full description goes here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, 
          a venenatis justo odio ac nulla. This is where you describe the project in full detail.
        </p>

        <Link
          to="/projects"
          className="inline-block mt-6 bg-[#003152] text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Back to Projects
        </Link>
      </div>
    </>
  );
};

export default ProjectDetail;
