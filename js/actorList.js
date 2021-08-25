const url = "https://actorlist-3452.restdb.io/rest/actors";

const options = {
  headers: {
    "x-apikey": "61262f4443cedb6d1f97e8eb",
    "Content-Type": "application/json",
  },
};

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

function showActor(actors) {
  actors.forEach((actors) => {
    // console.log(product);
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = actors.fullname;

    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
  });
}
