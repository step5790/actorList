window.addEventListener("load", start);

const urlParamsId = new URLSearchParams(window.location.search);
const movie = urlParamsId.get("movie");

function start() {
  if (movie != null) {
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

    function showActor(actors) {
      actors.forEach((actors) => {
        const template = document.querySelector("template").content;
        const actorsClone = template.cloneNode(true);

        actorsClone.querySelector("a").textContent = actors.fullname;
        actorsClone
          .querySelector(".actor_link")
          .addEventListener("click", function () {
            alert(actors.movie);
          });

        const mainEl = document.querySelector("main");
        mainEl.appendChild(actorsClone);
      });
    }
    console.log(movie);
  } else {
    let url = `https://actorlist-3452.restdb.io/rest/actors?fetchchildren=true`;

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
        const template = document.querySelector("template").content;
        const actorsClone = template.cloneNode(true);

        actorsClone.querySelector(".actor_link").textContent = actors.fullname;
        // actorsClone.querySelector(
        //   ".actor_link"
        // ).href = `actor_details.html?actor=${actors._id}`;

        actorsClone
          .querySelector(".actor_link")
          .addEventListener("click", function () {
            alert(actors.movie);
          });

        const mainEl = document.querySelector("main");
        mainEl.appendChild(actorsClone);
      });
    }
  }
}
