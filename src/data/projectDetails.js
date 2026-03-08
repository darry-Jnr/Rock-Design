const projectData = [
    {
      id: 1,
      title: "Panthers",
      year: "----",
      country: "Idaho",
      category: "Luxury Residential",
      // Main image for the grid and hero
      image:  "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240316/panthers-2_sy4rvd.webp",
      
      // The "Story" or write-up the client gave you so here it has title which is this "Proposed Residential Development for Jeremy Mingura at Idaho "
      description: "This project is a thoughtfully designed large-scale residential development set on an expansive lot, delivering approximately 8,100+ sq ft of refined living space across two levels. The design prioritizes openness, comfort, and functionality, with generous ceiling heights and seamless transitions between indoor and outdoor areas.Key features include multiple entertainment and leisure spaces such as a home theatre, billiards room, gym, bar, wine storage, and a private master suite. The development is complemented by extensive covered patios, an outdoor kitchen, swimming pool, and sunken firepit, as well as a dedicated RV garage with an attached guest suite. The result is a modern luxury residence optimized for both everyday living and hosting.",
  
      // 3D Renders Gallery (Array of strings)
      gallery: [
        "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240315/panthers-1_alxlp7.webp",
       "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240316/panthers-2_sy4rvd.webp",
       "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240317/panthers-3_bzod8b.webp",
       "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240316/panthers-4_wnsgos.webp",
       "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240253/panthers-5_xsvqmx.webp",
      ],
  
      // Technical Plans / Blueprints
      plans: [
        "/src/assets/images/projects/panthers/PANTHERS.png",
      ],
  
    },
    {
      id: 2,
      title: "LLC-Califonia",
      year: "----",
      country: "California",
      category: "Commercial Landmark",
      image:  "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240258/des2_bsmsq5.jpg",
      description: "Redefining the skyline with sustainable materials and vertical gardens. This tower uses passive cooling techniques to reduce energy consumption by 40%.",
      // This project might not have a video, so we just leave it out
      gallery: [
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240258/des2_bsmsq5.jpg",
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240256/des3_slxtnj.webp",
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240262/des4_p9imak.jpg",
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240320/des5_wwej9j.webp",
      ],
      plans: [
        "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240320/LLC-CALIFORNIA_tqe2fd.webp",
      ]
      // No videoUrl here? No problem, the code handles it.
    }
    ,
    {
      id: 3,
      title: "Porto Rico",
      year: "----",
      country: "California",
      category: "Commercial Landmark",
      image:  "/src/assets/images/projects/llc/des2.jpg",
      description: "Redefining the skyline with sustainable materials and vertical gardens. This tower uses passive cooling techniques to reduce energy consumption by 40%.",
      // This project might not have a video, so we just leave it out
      gallery: [
         "/src/assets/images/projects/llc/des2.jpg",
         "/src/assets/images/projects/llc/des3.webp",
         "/src/assets/images/projects/llc/des4.jpg",
         "/src/assets/images/projects/llc/des5.",
      ],
      plans: [
        "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240327/PORTO-RICO_tr3kbi.png",
      ]
      // No videoUrl here? No problem, the code handles it.
    },

    {
      id: 4,
      title: "Vincent Mount",
      year: "----",
      country: "California",
      category: "Commercial Landmark",
      image:  "/src/assets/images/projects/llc/des2.jpg",
      description: "Redefining the skyline with sustainable materials and vertical gardens. This tower uses passive cooling techniques to reduce energy consumption by 40%.",
      // This project might not have a video, so we just leave it out
      gallery: [
         "/src/assets/images/projects/llc/des2.jpg",
         "/src/assets/images/projects/llc/des3.jpg",
         "/src/assets/images/projects/llc/des4.jpg",
         "/src/assets/images/projects/llc/des5.jpg",
      ],
      plans: [
        "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240330/vincent_x5tzag.png",
      ]
      // No videoUrl here? No problem, the code handles it.
    },
    {
      id: 5,
      title: "Kulima Montessori",
      year: "----",
      country: "Georgia",
      category: "Commercial Landmark",
      image: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240322/Red_1_oyg9mi.webp", 
      // Add the local path to your mp4 file here
      // videoUrl: "/src/assets/images/projects/kulima/animation/Monte.mp4",  
      description: "Kulima Montessori is a comprehensive school design developed by Rock Dezign, featuring a two-storey academic facility with integrated classrooms, specialized learning spaces, administrative offices, and landscaped courtyards.",
      gallery: [
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240322/Red_1_oyg9mi.webp",
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240321/Red_2_v9xnmr.webp",
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240268/Red_3_z5ievc.webp",
         "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240269/Red_4_zngleg.jpg",
      ],
      // plans: [
      //   "/src/assets/images/projects/llc/LLC-CALIFORNIA.png",
      // ]
    }
  ];

  
  export default projectData;