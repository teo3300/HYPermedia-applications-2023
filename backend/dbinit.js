function linkPerson(model_el) {
  return await models.Person.create(model_el);
}
function linkProject(model_el) {
  return await models.Project.create(model_el);
}
function linkArea(model_el) {
  return await models.Person.create(model_el);
}

// Still to implement depending on the necessary infos for the pages 
export default async (models) => {
  const personModel = [

  ]
  const projectModel = [
    
  ]
  const areaModel = [

  ]
  const concernModel = [

  ]
  await models.People.bulkCereate(dogModel)
  await models.Projects.bulkCereate(projectModel)
  await models.Areas.bulkCereate(areaModel)
  await models.Concern.bulkCereate(concernModel)
}
