// Still to implement depending on the necessary infos for the pages
export default async (models) => {
  const personModel = [
    {
      name: "Tafazzi Poretti",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'Tafazzi.jpg', 
        post: '', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Alexander WONG",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'AlexanderWONG.png', 
        post: 'Founder & investment strategist', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Benjamin PATEL",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'benjaminPatel.jpg', 
        post: 'Founder & investment analyst', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Emily JOHNSON",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'emilyJohnson.jpg', 
        post: 'Founder & portfolio manager', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Olivia MELBENT",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'oliviaMELBENT.jpg', 
        post: 'Founder & investment analyst', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Kali Broneman",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'KaliBroneman.jpg',
        post: '', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Marco Aventuzzi",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'MarcoAventuzzi.jpg',
        post: '', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Daniel Ramirez Castro",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'DanielRamirezCastro.jpg',
        post: '', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
    {
      name: "Spencer Right",
      relevance: 1,
      data: {
        desc_short: "Dr. Tafazzi Poretti is an accomplished technology leader with extensive experience in managing innovative projects at the intersection of artificial intelligence and finance. With a Ph.D. in Computer Science and a deep understanding of machine learning algorithms, Dr. Poretti brings a wealth of technical expertise to the TechSage project.",
        image: 'SpencerRight.jpg',
        post: '', 
        experience: [
          '1998 - has obtained that diploma - in that school',
          '2000 - has done that job - in that company', 
          '2007 - has done that job - in that company', 
          '2015 - has done that job - in that company', 
          '2022 - has joined our company'
        ]
      }
    },
  ]

  const giacomino = await models.People.create(personModel[0])
  const alexwong = await models.People.create(personModel[1])
  const benjpat = await models.People.create(personModel[2])
  const emilyjohn = await models.People.create(personModel[3])
  const oliviamel = await models.People.create(personModel[4])
  const danielramirez = await models.People.create(personModel[5])
  const kalibroneman = await models.People.create(personModel[6])
  const marcoaventuzzi = await models.People.create(personModel[7])
  const spencerright = await models.People.create(personModel[8])


  const projectModel = [
    {
      name: "Synthetic data",
      relevance: 1,
      data: {
        image: 'hazyAndI3E.png',
        desc_short: 'We support the development and use of synthetic data with Hazy. The synthetic data is a revolutionary approach that bridges the gap between data privacy and data-driven innovation. Our mission is to drive forward the adoption of synthetic data, unlocking new possibilities while safeguarding sensitive information and ensuring compliance with privacy regulations.',
        desc_long: [
          `--- a long description ---`
        ], 
        url: "https://hazy.com/resources/2023/06/01/the-state-of-synthetic-data",
      },
      PersonId: alexwong.id
    },
    {
      name: "AI factory",
      relevance: 3,
      data: {
        image: 'preligensAndI3E.png',
        desc_short: 'This is a game-changing project, featuring a multi-intelligence, AI-enabled operating system. This innovative platform addresses complex intelligence problems by seamlessly integrating cutting-edge technologies like machine learning, natural language processing, computer vision, and predictive analytics.',
        desc_long: [
          `--- a long description ---`
        ], 
        url: "https://preligens.com/products/ai-factory",
      },
      PersonId: benjpat.id
    },
    {
      name: "Alibi detect",
      relevance: 2,
      data: {
        image: 'seldomAndI3E.png',
        desc_short: 'This is a powerful open-source Python library dedicated to outlier, adversarial, and drift detection. This innovative toolset provides a comprehensive range of functionalities to identify anomalies, detect adversarial attacks, and monitor data drift in various domains, with transparency and interpretability.',
        desc_long: [
          `--- a long description ---`
        ], 
        url: "https://www.seldon.io/solutions/open-source-projects/alibi-detect",
      },
      PersonId: giacomino.id
    }, 
    {
      name: "AI against theft",
      relevance: 4,
      data: {
        image: 'veesionAndI3E.png',
        desc_short: 'This project empowers businesses to harness the power of AI in preventing theft across various types of stores. By leveraging advanced artificial intelligence technology, Veesion offers a comprehensive solution to detect and deter theft incidents. Join us on this transformative journey to enhance security measures, protect your assets, and create a safer shopping environment.',
        desc_long: [
          `--- a long description ---`
        ],
        url: "https://veesion.io/secteurs/",
      },
      PersonId: giacomino.id
    }, 
    {
      name: "Case Study: Phase III AAD Trial",
      relevance: 5,
      data: {
        image: 'inatoAndI3E.png',
        desc_short: 'Collaborate with Inato is to access untapped patient populations and identify qualified sites that could enroll patients in short amount of time for various kind of medical research. Discover how partnering with Inato allowed them to meet their trial goals and accelerate their timeline.',
        desc_long: [
          `--- a long description ---`
        ],
        url: "https://inato.com/marketplace-materials/case-study-phase-iii-aad-trial/",
      },
      PersonId: giacomino.id
    }, 
    {
      name: "Quantum-inspired physics and AI",
      relevance: 7,
      data: {
        image: 'aqemiaAndI3E.png',
        desc_short: 'Aqemia combines quantum-inspired physics and AI to revolutionize drug discovery. By harnessing advanced algorithms, they accelerate and enhance the development of life-saving medications. Join us on this transformative journey to reshape the future of pharmaceutical research.',
        desc_long: [
          `--- a long description ---`
        ],
        url: "https://www.aqemia.com/#first_section",
      },
      PersonId: giacomino.id
    }, 
    {
      name: "Medical decision help",
      relevance: 6,
      data: {
        image: 'pososAndI3E.png',
        desc_short: 'This project aims to provide invaluable support for medical prescriptions and decisions. Through the integration of advanced technologies and data analysis, we offer an innovative solution that assists healthcare professionals in making informed choices and ensuring optimal patient care.',
        desc_long: [
          `--- a long description ---`
        ],
        url: "https://www.posos.co/solutions/decision-medicale",
      },
      PersonId: giacomino.id
    },
    {
      name: "Recycling with robotics",
      relevance: 8,
      data: {
        image: 'recycleyeAndI3E.png',
        desc_short: 'This project invites you to embrace robotic automation as the next frontier in sorting innovation for recycling. By harnessing cutting-edge robotics technology, Recycleye revolutionizes the recycling process, streamlining sorting operations and increasing efficiency.',
        desc_long: [
          `--- a long description ---`
        ],
        url: "https://recycleye.com/solutions/",
      },
      PersonId: giacomino.id
    },
    {
      name: "Solar Energy provider",
      relevance: 9,
      data: {
        image: 'wunderAndI3E.png',
        desc_short: 'This project offers a comprehensive solar energy solution tailored specifically for commercial and industrial real estate. As a dedicated solar energy provider, Wunder enables businesses to harness the power of renewable energy, reducing carbon footprint and energy costs.',
        desc_long: [
          `--- a long description ---`
        ],
        url: "https://www.wundercapital.com/",
      },
      PersonId: giacomino.id
    },
    {
      name: "Demand Forecasting",
      relevance: 11,
      data: {
        image: 'relexAndI3E.png',
        desc_short: 'This project specializes in demand forecasting for the retail and consumer goods industry. By leveraging advanced analytics and data-driven insights, Relex provides businesses with accurate predictions and valuable foresight into customer demand.',
        desc_long: [
          `--- a long description ---`
        ],
        url: "https://www.relexsolutions.com/resources/demand-forecasting/",
      },
      PersonId: giacomino.id
    },


  ]
  const hazy = await models.Projects.create(projectModel[0]) // hazy : synthetic data
  const preligens = await models.Projects.create(projectModel[1]) // preligens : ai factory
  const seldom = await models.Projects.create(projectModel[2]) // seldom : alibi detect
  const veesion = await models.Projects.create(projectModel[3]) // veesion : ai againt theft
  const inato = await models.Projects.create(projectModel[4]) // inato : case study
  const aqemia = await models.Projects.create(projectModel[5]) // aqemia : quantum and ai
  const posos = await models.Projects.create(projectModel[6]) // posos : medical decision
  const recycleye = await models.Projects.create(projectModel[7]) // recycleye : recycling with robots
  const wunder = await models.Projects.create(projectModel[8]) // wunder : solar energy
  const relex = await models.Projects.create(projectModel[9]) // relex : demand forecasting



  const areaModel = [
    {
      name: "Technology & Software",
      data: {
        imgURL: '/HYPermedia-applications-2023/img/areas/technologyAndSoftware.jpg',
        description: 'We invest in innovative software solutions, emerging technologies, and disruptive tech startups that have the potential to transform industries and reshape the digital landscape.',
        pageURL: 'areaTech',
        summary: "Dynamic and rapidly evolving sector, it offers exciting investment opportunities. This area encompasses a wide range of innovations, including cutting-edge software solutions, artificial intelligence, machine learning, blockchain, cloud computing, and more. \n We support startups and companies that are poised to improve operational efficiency, enhance user experiences, and drive digital transformation. By investing in technology and software, we aim to support advancements that have the potential to shape the future and unlock new possibilities in various sectors of the economy.",
        slidesPartners: [
          {
            image: "/HYPermedia-applications-2023/img/partners/hazylogo.png",
            name: "HAZY",
            desc_short: "AI, Machine Learning, Data and Analytics, Business Intelligence",
            url: "https://hazy.com",
          },
          {
            image: "/HYPermedia-applications-2023/img/partners/preligens_logo.jpg",
            name: "PRELIGENS",
            desc_short: "AI, Machine Learning, Space Tech, Data and Analytics, Business Intelligence, Communications",
            url: "https://preligens.com/",
          },
          {
            image: "/HYPermedia-applications-2023/img/partners/Seldonlogo.png",
            name: "SELDON",
            desc_short: "AI, Machine Learning, Data and Analytics, Business Intelligence, Open Source",
            url: "https://www.seldon.io/",
          },
          {
            image: "/HYPermedia-applications-2023/img/partners/veesionlogo.png",
            name: "Veesion",
            desc_short: "CPG & Consumer Goods, AI, Machine Learning, Privacy and Security, Video, Business Intelligence, Communications",
            url: "https://veesion.io/",
          },
        ],
        areaProjects : [hazy.id, preligens.id, seldom.id, veesion.id],
      }
    },
    {
      name: "Healthcare & biotechnology",
      data: {
        imgURL: '/HYPermedia-applications-2023/img/areas/healthcareAndBiotechnology.jpg',
        description: 'We support groundbreaking advancements in healthcare, biotech research, pharmaceuticals, and medical devices, aiming to improve patient outcomes, revolutionize treatments, and address pressing global health challenges.',
        pageURL: 'areaHealth',
        summary: "The Healthcare and Biotechnology sector is at the forefront of scientific discovery, medical advancements, and improving the quality of human life. This dynamic field encompasses a wide range of investment opportunities, including pharmaceutical research and development, innovative medical devices, diagnostics, genomics, and biotech startups. \n We invest in healthcare and biotechnology to offer the potential to revolutionize patient care, tackle global health challenges, and drive progress in areas such as personalized medicine, precision therapies, regenerative medicine, and breakthrough treatments for diseases.",
        slidesPartners: [
          {
            image: "/HYPermedia-applications-2023/img/partners/inatologo.png",
            name: "Inato",
            desc_short: "Health Tech, AI, Biotech, Machine Learning, Pharma",
            url: "https://inato.com/",
          },
          {
            image: "/HYPermedia-applications-2023/img/partners/aqemialogo.png",
            name: "Aqemia",
            desc_short: "Health Tech, AI, Biotech, Machine Learning, Pharma, Quantum Computing",
            url: "https://www.aqemia.com/",
          },
          {
            image: "/HYPermedia-applications-2023/img/partners/pososlogo.png",
            name: "Posos",
            desc_short: "Health Tech, AI, Machine Learning",
            url: "https://www.posos.co/",
          },
        ],
        areaProjects : [inato.id, aqemia.id, posos.id],
      }
    },
    {
      name: "Clean energy & sustainability",
      data: {
        imgURL: '/HYPermedia-applications-2023/img/areas/cleanEnergyAndSustainability.jpg',
        description: 'We believe in sustainable energy solutions, renewable technologies, and environmentally conscious initiatives that promote a greener future, combat climate change, and reduce our carbon footprint.',
        pageURL: 'areaEnergy',
        summary: "In the Clean Energy and Sustainability sector we focus on investments that promote environmentally friendly practices, renewable energy sources, and sustainable solutions. It encompasses areas such as solar and wind energy, energy storage technologies, electric vehicles, green infrastructure, and initiatives aimed at reducing carbon emissions. \n Investing in clean energy and sustainability offers the opportunity to drive the transition to a more sustainable future, combat climate change, and create a positive environmental impact while also seeking attractive financial returns.",
        slidesPartners: [
          {
            image: "/HYPermedia-applications-2023/img/partners/recycleyelogo.png",
            name: "Recycleye",
            desc_short: "Climate Tech & Green Tech, Foodtech, Hardware, Machine Learning, Data and Analytics, Manufacturing, Wearables",
            url: "http://recycleye.com/",
          },
          {
            image: "/HYPermedia-applications-2023/img/partners/wunderlogo.png",
            name: "Wunder",
            desc_short: "Greentech ,Social Impact ,Software ,Energy",
            url: "https://www.wundercapital.com/",
          },
        ],
        areaProjects : [recycleye.id, wunder.id],
      }
    },
    {
      name: "E-Commerce & Consumer goods",
      data: {
        imgURL: '/HYPermedia-applications-2023/img/areas/Ecommerce.jpg',
        description: 'We invest in promising startups and emerging brands within the e-commerce and consumer goods sectors, capitalizing on changing consumer preferences, digital transformation, and the evolving retail landscape.',
        pageURL: 'areaEcommerce',
        summary: "The E-commerce and Consumer Goods sector encompasses investments in the digital marketplace, online retail, direct-to-consumer brands, and emerging consumer trends. We support innovative startups and established companies that leverage technology, data analytics, and logistics to transform the way goods are bought and sold. \n Investing in e-commerce and consumer goods allows for tapping into the growing digital economy, capturing shifting consumer behavior, and participating in the evolution of retail.",
        slidesPartners: [
          {
            image: "/HYPermedia-applications-2023/img/partners/RELEX-logo.png",
            name: "Relex solutions",
            desc_short: "CPG & Consumer Goods, AI, Machine Learning, Data and Analytics, Sales and Marketing, Business Intelligence, CRM",
            url: "https://www.relexsolutions.com/",
          },
        ],
        areaProjects : [relex.id],
      }
    },
  ]
  const tech_sw = await models.Areas.create(areaModel[0])
  const heal_bio = await models.Areas.create(areaModel[1])
  const ene_sus = await models.Areas.create(areaModel[2])
  const com_goods = await models.Areas.create(areaModel[3])

  const concernModel = [
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: tech_sw.id,
      ProjectId: hazy.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: tech_sw.id,
      ProjectId: preligens.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: tech_sw.id,
      ProjectId: seldom.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: tech_sw.id,
      ProjectId: veesion.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: heal_bio.id,
      ProjectId: inato.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: heal_bio.id,
      ProjectId: aqemia.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: heal_bio.id,
      ProjectId: posos.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: ene_sus.id,
      ProjectId: recycleye.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: ene_sus.id,
      ProjectId: wunder.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: com_goods.id,
      ProjectId: relex.id,
    },
    {
      placeholder: "PLACEHOLDER",
      data: {
        place_holder: "PLACEHOLDER"
      },
      AreaId: ene_sus.id,
      ProjectId: relex.id
    }
  ]
  await models.Concern.bulkCreate(concernModel)
}

