// Still to implement depending on the necessary infos for the pages
export default async (models) => {
  const personModel = [
    {
      name: "PLACEHOLDER",
      relevance: 1,
      data: {
        place_holder: "PLACEHOLDER"
      }
    }
  ]

  const person0 = await models.People.create(personModel[0])

  const projectModel = [
    {
      name: "TechSage",
      relevance: 1,
      data: {
        image : 'TechSage.jpg',
        desc_short    : 'An innovative tech project focused on leveraging artificial intelligence and machine learning to revolutionize the way people manage their personal finances.',
        desc_long   : [
          `At TechSage, we recognize that managing personal finances can often be complex, time-consuming, and overwhelming. Our platform addresses these challenges by harnessing the potential of AI and ML algorithms to deliver personalized financial insights and recommendations. By analyzing individual spending patterns, income sources, and savings goals, our intelligent system generates customized plans that adapt to each user's unique financial situation.`,
          `Through our intuitive user interface, TechSage offers a comprehensive suite of tools designed to simplify budgeting, expense tracking, and financial goal setting. Users can effortlessly monitor their cash flow, track expenses, and receive proactive alerts to avoid overspending or missed bill payments. Our smart budgeting features provide real-time visibility into spending patterns, helping users identify areas for potential savings and make data-driven decisions to optimize their financial outcomes.`
        ]
      },
      personId: person0.id
    }
  ]
  const proj0 = await models.Projects.create(projectModel[0])

  const areaModel = [
    {
      name: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      }
    }
  ]
  const area0 = await models.Areas.create(areaModel[0])

  const concernModel = [
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      areaId: area0.id,
      projectId: proj0.id
    }
  ]
  const concern0 = await models.Concern.create(concernModel[0])
}
