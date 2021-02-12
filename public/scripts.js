const cards = document.querySelectorAll(".cards");

for (let card of cards) {
  card.addEventListener("click", function () {
    const receitaId = card.getAttribute("id");
    window.location.href = `/receita?id=${receitaId}`;
  });
}

// const modalOverlay = document.querySelector(".modal-overlay");
// const cards = document.querySelectorAll(".card");

// for (let card of cards) {
//   card.addEventListener("click", function () {
//     const videoId = card.getAttribute("id");
//     window.location.href = `/video?id=${videoId}`;
//   });
// }
