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

    currentProject = project;

}

const projects = {
  project1: {
        title: "Transformative Wool Textiles",
        year: "2025",
        acknowledgements: "Mentor: Grace Tan", 
    },
};