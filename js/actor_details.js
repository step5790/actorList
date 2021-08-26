const urlParamsId = new URLSearchParams(window.location.search);
const actorID = urlParamsId.get("actor");

fetch("https://actorlist-3452.restdb.io/rest/actors/" + actorID, {
  method: "GET",
  headers: {
    "x-apikey": "61262f4443cedb6d1f97e8eb",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showActor(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showActor(actor) {
  document.querySelector("h1").textContent = actor.fullname;
  document.querySelector("h2").textContent = actor.movie;
}
