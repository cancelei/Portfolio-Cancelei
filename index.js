const menu = document.getElementById('menu');
const { body } = document;

function menuOpen() {
  menu.classList.add('menu_open');
  body.classList.add('menu-open');
}

function menuClose() {
  menu.classList.remove('menu_open');
  body.classList.remove('menu-open');
}

menuOpen();

setTimeout(menuClose, 1);

// Project Section Revamp will have 3 parts: 1) Data, 2) Main Creator Function, 3) Project Description Function.
// Part 1) Projects Section ONLY Data Input

const projectsData = [
  {
    title: "Tonic1",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop1.svg",
    tags: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Multi-Post Stories2",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop2.svg",
    tags: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Tonic3",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop3.svg",
    tags: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Multi-Post Stories4",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop4.svg",
    tags: ["HTML", "CSS", "Javascript"]
  }
]

// Part 2) Project Section creation Function

function createProjectsSection() {
  const projectsContainer = document.getElementById("portfolio");

  projectsData.forEach(project => {
    const projectElement = document.createElement("sub");
    projectElement.classList.add("project__card");

    const imageElement = document.createElement("img");
    imageElement.classList.add("card__img");
    imageElement.src = project.imageUrl;
    projectElement.appendChild(imageElement);

    const cardDivisionElement = document.createElement("div");
    cardDivisionElement.classList.add("desktop_card_division");
    projectElement.appendChild(cardDivisionElement);

    const titleElement = document.createElement("h2");
    titleElement.classList.add("card__title");
    titleElement.textContent = project.title;
    cardDivisionElement.appendChild(titleElement);

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("card__details");
    cardDivisionElement.appendChild(detailsElement);

    const detailsTitleElement = document.createElement("h4");
    detailsTitleElement.classList.add("details__title");
    detailsTitleElement.textContent = project.detailsTitle;
    detailsElement.appendChild(detailsTitleElement);

    const separatorElement1 = document.createElement("img");
    separatorElement1.src = "Assets/Counterball.svg";
    separatorElement1.alt = "separator";
    detailsElement.appendChild(separatorElement1);

    const detailsTextElement1 = document.createElement("h4");
    detailsTextElement1.classList.add("details__text");
    detailsTextElement1.textContent = project.detailsText;
    detailsElement.appendChild(detailsTextElement1);

    const separatorElement2 = document.createElement("img");
    separatorElement2.src = "Assets/Counterball.svg";
    separatorElement2.alt = "separator";
    detailsElement.appendChild(separatorElement2);

    const detailsYearElement = document.createElement("h4");
    detailsYearElement.classList.add("details__year");
    detailsYearElement.textContent = project.detailsYear;
    detailsElement.appendChild(detailsYearElement);

    const descriptionElement = document.createElement("h4");
    descriptionElement.classList.add("card__description");
    descriptionElement.textContent = project.description;
    cardDivisionElement.appendChild(descriptionElement);

    const tagParentElement = document.createElement("ul");
    tagParentElement.classList.add("tag__parent");
    cardDivisionElement.appendChild(tagParentElement);

    project.tags.forEach(tag => {
      const tagElement = document.createElement("li");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;
      tagParentElement.appendChild(tagElement);
    });

    const buttonParentElement = document.createElement("div");
    buttonParentElement.classList.add("about__button--parent");
    cardDivisionElement.appendChild(buttonParentElement);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("button__std", "btn");
    buttonElement.textContent = "See Project";
    buttonParentElement.appendChild(buttonElement);

    projectsContainer.appendChild(projectElement);
  });
}

window.addEventListener("load", createProjectsSection);