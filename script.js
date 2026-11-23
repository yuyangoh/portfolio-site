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
    },
};