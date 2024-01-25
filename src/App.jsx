import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  function handleSaveProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleSaveProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} projects={projectsState.projects} />
      {content}
    </main>
  )
}

export default App
