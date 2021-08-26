window.addEventListener("load", start);

let url = `https://actorlist-3452.restdb.io/rest/actors?fetchchildren=true`;

const options = {
  headers: {
    "x-apikey": "61262f4443cedb6d1f97e8eb",
    "Content-Type": "application/json",
  },
};

function start() {
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })

    .then((data) => {
      showActor(data);
    })

    .catch((e) => {
      console.error("Error", e.message);
    });
}

function showActor(actors) {
  actors.forEach((actors) => {
    const template = document.querySelector("template").content;
    const actorsClone = template.cloneNode(true);

    actorsClone.querySelector(".actor_link").textContent = actors.fullname;
    actorsClone.querySelector(
      ".actor_link"
    ).href = `actor_details.html?actor=${actors._id}`;

    const mainEl = document.querySelector("main");
    mainEl.appendChild(actorsClone);
  });
}
