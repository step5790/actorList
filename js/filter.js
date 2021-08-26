window.addEventListener("load", start);
const urlFilterParams = new URLSearchParams(window.location.search);
const categoryFilter = urlFilterParams.get("movie");

let urlFilter = `https://actorlist-3452.restdb.io/rest/actors?fetchchildren=true&q={"movie":"${categoryFilter}"}`;
const optionsFilter = {
  method: "GET",
  headers: {
    "x-apikey": "61262f4443cedb6d1f97e8eb",
    "Content-Type": "application/json",
  },
};

function start() {
  fetch(urlFilter, {
    method: "GET",
    headers: {
      "x-apikey": "61262f4443cedb6d1f97e8eb",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showActor(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function showActor(actors) {
  actors.forEach((actors) => {
    const template = document.querySelector("template").content;
    const actorsClone = template.cloneNode(true);

    actorsClone.querySelector("a").textContent = actors.fullname;
    actorsClone.querySelector(
      ".actor_link"
    ).href = `actor_details.html?actor=${actors._id}`;

    const mainEl = document.querySelector("main");
    mainEl.appendChild(actorsClone);
  });
}
