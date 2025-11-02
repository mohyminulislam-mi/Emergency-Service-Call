let hearts = 0;
let copies = 0;
let coins = 100;

const heartCount = document.getElementById("heartCount");
const copyCount = document.getElementById("copyCount");
const coinCount = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");
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

  // Calls function
  const callBtn = target.className.includes("callBtn")
    ? target
    : target.parentNode.className.includes("callBtn")
    ? target.parentNode
    : target.parentNode.parentNode.className.includes("callBtn")
    ? target.parentNode.parentNode
    : null;

  if (callBtn) {
    const card = callBtn.closest(".card");
    const number = card.querySelector(".number").textContent;
    const name = card.querySelector("h4").textContent;

    if (coins < 20) {
      alert("❌ Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    alert(`📞 Calling ${name} at ${number}`);

    // BD Time zone
    const time = new Date().toLocaleTimeString("en-BD", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    });
    // Call History
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="bg-green-50 flex justify-between items-center p-3 rounded-lg mb-3 shadow-sm">
        <div>
          <p class="text-black text-lg font-semibold">${name}</p>
          <p class="font-extrabold text-lg">${number}</p>
        </div>
        <span class="font-semibold">${time}</span>
      </div>
    `;
    historyList.appendChild(li);
  }
});
// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
