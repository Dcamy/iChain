/*
Choo-choo! Let's get ProjectList.js up and running. This container will fetch the list of projects using useProjects and render a ProjectCard for each project.

Assuming you have the useProjects hook ready to fetch project data (either from a static file, an API, or even Google Sheets as previously discussed), here's how you can implement ProjectList.js:

javascript
Copy code
*/

import React from 'react';
import useProjects from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const ProjectList = () => {
  const { projects, loading } = useProjects();

  if (loading) {
    return <div>Loading projects...</div>; // You can replace this with a styled loading spinner if you like
  }

  return (
    <ListContainer>
      {projects.length ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            summary={project.summary}
            status={project.status}
          // You can pass other project-specific props as needed
          />
        ))
      ) : (
        <div>No projects found.</div>
      )}
    </ListContainer>
  );
};
export default ProjectList;

/*
export default ProjectList;
This container uses the useProjects hook to manage the fetching and loading state of your projects. It uses a flexbox layout to evenly space and wrap ProjectCard components.

Remember, this file will likely evolve as you build out the rest of your application. For example, you may want to add error handling or create more complex layouts based on the projects' data.

If you want to move on to the next file or if you need to discuss more about ProjectList.js or any other file, just let me know!
*/