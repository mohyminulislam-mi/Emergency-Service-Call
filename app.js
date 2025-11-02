let hearts = 0;
let copies = 0;

const heartCount = document.getElementById("heartCount");
const copyCount = document.getElementById("copyCount");
const cardContainer = document.getElementById("cardContainer");

cardContainer.addEventListener("click", (e) => {
  const target = e.target;

  // Like function
  const likeBtn = target.className.includes("likeBtn")
    ? target
    : target.parentNode.className.includes("likeBtn")
    ? target.parentNode
    : target.parentNode.parentNode.className.includes("likeBtn")
    ? target.parentNode.parentNode
    : null;

  if (likeBtn) {
    hearts++;
    heartCount.textContent = hearts;
  }

  // Copy function
  const copyBtn = target.className.includes("copyBtn")
    ? target
    : target.parentNode.className.includes("copyBtn")
    ? target.parentNode
    : target.parentNode.parentNode.className.includes("copyBtn")
    ? target.parentNode.parentNode
    : null;

  if (copyBtn) {
    const card = copyBtn.closest(".card");
    const number = card.querySelector(".number").textContent;
    navigator.clipboard.writeText(number);
    alert(`Number copied: ${number}`);
    copies++;
    copyCount.textContent = copies;
  }
});
