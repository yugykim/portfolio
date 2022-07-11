interface IProejct {
  "id": string,
  "name": string,
  "url": string,
}

function ProjectContent(project: IProejct){
  return <div>{project.name}</div>;
}

export default ProjectContent;