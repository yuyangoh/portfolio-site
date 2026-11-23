let currentProject = null;

function openProject(projectId) {
  const project = projects[projectId];

    var x = document.getElementById("content");
    var y = document.getElementById("overviewImg");
    if (x.style.display === "none" && y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
    }

    document.getElementById("title").textContent = project.title;
    document.getElementById("year").textContent = project.year;
    document.getElementById("acknowledgements").textContent = project.acknowledgements;
    document.getElementById("abstract").textContent = project.abstract;

    const link = document.getElementById("link");
    link.href = project.linkURL;
    link.textContent = project.linkTitle;

    const img = document.getElementById("projImg");
    img.src = project.image;

    currentProject = project;

}

function closeAll() {
  var x = document.getElementById("content");
  var y = document.getElementById("overviewImg");
  if (x.style.display === "block" && y.style.display === "none") {
  x.style.display = "none";
  y.style.display = "block";
  }
}

const projects = {
  project1: {
        title: "Transformative Wool Textiles",
        year: "2025",
        acknowledgements: "Under the guidance of Grace Tan", 
        abstract: "Wool yarn shrinks when subjected to textile processing techniques such as fulling. This project investigates encoding transformative forms into knitted textiles through the shrinkage of wool yarn. By combining wool yarn that transforms with a stable yarn that does not transform into the same knit, textures and forms emerge as the textile undergoes fulling.",
        image: "twt.png",
        linkURL: "",
        linkTitle: "Read more"
      },

  project2: {
        title: "P-Threads",
        year: "2024",
        acknowledgements: "Under the guidance of Yen Ching Chiuan, Sheryl Teng, E Ian Siew", 
        abstract: "This project explores bonding textiles with 3D-printed structures, replacing conventional stitching and adhesives. The functional and decorative aspects of this textile approach are illustrated with 3 wearables made with different 3D-print structures.",
        image: "pt.png",
        linkURL: "",
        linkTitle: "Read more"
      },
  
  project3: {
        title: "row x row",
        year: "2024",
        acknowledgements: "With Vina Setiawaty and Sheryl Teng, under the guidance of Clement Zheng", 
        abstract: "This is an interactive knitting performance: (1) Audiences establish instructions for a knit pattern through a digital form, (2) the knitter's digital interface receives the knit pattern and instructs her on the operation of the knitting machine, (3) all knit patterns submitted were archived in a digital library.",
        image: "row.png",
        linkURL: "",
        linkTitle: "Read more"
      },
  
  project4: {
        title: "my sites",
        year: "2026",
        acknowledgements: "Inspired by Elliott Cost, Lee Jisu, and various websites visited", 
        abstract: "Website builders have limited customisability and templates make many sites look similar. For me, a website is a canvas that I can prototype and express myself with. I build my websites from scratch with HTML, CSS, and Javascript, and their design to build processes are never linear.",
        image: "ms.png",
        linkURL: "https://yuyangoh.github.io/sites-index/",
        linkTitle: "Visit my sites index"
      },
  
  project5: {
        title: "When Nature Speaks...",
        year: "2024",
        acknowledgements: "With Felicia Wong, under the guidance of team from Design Incubation Centre", 
        abstract: "When Nature Speaks... is a concept for a design exhibition -- when nature speaks, designers respond. Its visual identity revolves around a pair of quotation marks and the call and response between nature and designers.",
        image: "wns.png",
        linkURL: "",
        linkTitle: "Read more"
      },
  
  project6: {
        title: "video works",
        year: "2024 ~",
        acknowledgements: "Edited with Adobe Premiere Pro", 
        abstract: "These videos were made for various purposes, mostly to summarise a project or a topic.",
        image: "v.png",
        linkURL: "https://youtube.com/playlist?list=PLfJdLzewubAg&si=I-uc9jug8TRybpQ1",
        linkTitle: "Watch videos"
      },
  
  project7: {
        title: "photobook",
        year: "2022 ~",
        acknowledgements: "Instagram page", 
        abstract: "I hope you enjoy these photographs I took.",
        image: "p.png",
        linkURL: "https://www.instagram.com/mdmrmld/",
        linkTitle: "Visit page"
      },
};