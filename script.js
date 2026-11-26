let currentProject = null;

function openProject(projectId) {
  
  const project = projects[projectId];

    var x = document.getElementById("content1");
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
  var x = document.getElementById("content1");
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
        linkURL: "https://drive.google.com/file/d/1X8Oto-Hi03hG8SnCh_4KoW2S02sQ9PMI/view?usp=drive_link",
        linkTitle: "Read more"
      },

  project2: {
        title: "P-Threads",
        year: "2024",
        acknowledgements: "With Sharon Lee, under the guidance of Yen Ching Chiuan, Sheryl Teng, E Ian Siew", 
        abstract: "This project explores bonding textiles with 3D-printed structures, replacing conventional stitching and adhesives. The functional and decorative aspects of this textile approach are illustrated with 3 wearables made with different 3D-print structures.",
        image: "pt.png",
        linkURL: "https://drive.google.com/file/d/10DvMo6KXw7-E9bfli7B7Wi9hjvdeMJtk/view?usp=sharing",
        linkTitle: "Read more"
      },
  
  project3: {
        title: "row x row",
        year: "2024",
        acknowledgements: "With Vina Setiawaty and Sheryl Teng, under the guidance of Clement Zheng", 
        abstract: "This is an interactive knitting performance: (1) Audiences establish instructions for a knit pattern through a digital form, (2) the knitter's digital interface receives the knit pattern and instructs her on the operation of the knitting machine, (3) all knit patterns submitted were archived in a digital library.",
        image: "row.png",
        linkURL: "https://drive.google.com/file/d/1ueMXZO4rpM1IA-HR_zxtks45pa390RMR/view?usp=sharing",
        linkTitle: "Read more"
      },
  
  project4: {
        title: "my sites",
        year: "2026",
        acknowledgements: "Inspired by Elliott Cost, Lee Jisu, and various websites visited", 
        abstract: "This is a personal project. I build my websites from scratch with HTML, CSS, and Javascript.",
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
        linkURL: "https://youtu.be/KQEpuy4V0EU",
        linkTitle: "Watch video"
      },
  
  project6: {
        title: "video works",
        year: "2024 ~",
        acknowledgements: "Edited with Adobe Premiere Pro", 
        abstract: "The selected videos here were made for events and projects.",
        image: "v.png",
        linkURL: "https://youtube.com/playlist?list=PLfJdLzewubAg&si=I-uc9jug8TRybpQ1",
        linkTitle: "Watch videos"
      },
  
  project7: {
        title: "photobook",
        year: "2022 ~",
        acknowledgements: "Instagram page", 
        abstract: "I hope to be able to make an actual photobook soon.",
        image: "p.png",
        linkURL: "https://www.instagram.com/mdmrmld/",
        linkTitle: "Visit page"
      },
};

//small screen 
const slideOrder = [
    "slide0",
    "slide1",
    "slide2",
    "slide3",
    "slide4",
    "slide5",
    "slide6",
    "slide7"
];

let currentSlide = 0;

const slides = {
  slide0: {
    image: "overview.png",
    link: "https://docs.google.com/spreadsheets/d/1lxSJMpUF7e0jJ6G0yEsl4iIj4VK-1yRxU1Km2FB860A/edit?usp=sharing"
  },

  slide1: {
    image: "twt_s.png",
    link: "https://drive.google.com/file/d/1X8Oto-Hi03hG8SnCh_4KoW2S02sQ9PMI/view?usp=drive_link"
  },

  slide2: {
    image: "pt_s.png",
    link: "https://drive.google.com/file/d/10DvMo6KXw7-E9bfli7B7Wi9hjvdeMJtk/view?usp=sharing"
  },

  slide3: {
    image: "row_s.png",
    link: "https://drive.google.com/file/d/1ueMXZO4rpM1IA-HR_zxtks45pa390RMR/view?usp=sharing"
  },

  slide4: {
    image: "ms_s.png",
    link: "https://yuyangoh.github.io/sites-index/"
  },

  slide5: {
    image: "wns_s.png",
    link: "https://youtu.be/KQEpuy4V0EU"
  },

  slide6: {
    image: "v_s.png",
    link: "https://youtube.com/playlist?list=PLfJdLzewubAg&si=I-uc9jug8TRybpQ1"
  },

  slide7: {
    image: "p_s.png",
    link: "https://www.instagram.com/mdmrmld/"
  },
}

function showSlide(index) {
    currentSlide = (index + slideOrder.length) % slideOrder.length; //loop

    // get current slide
    const slideId = slideOrder[currentSlide];
    const slide = slides[slideId];

    // update slide content
    const img = document.getElementById("carouselImg");
    img.src = slide.image;
    const link = document.getElementById("carouselLink");
    link.href = slide.link;
}

//carousel navigation
function next() {
    showSlide(currentSlide + 1);
}

function prev() {
    showSlide(currentSlide - 1);
}

showSlide(0);