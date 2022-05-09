// Get elements
const ratingContainer = document.getElementById("rating-container");

const scores = document.querySelectorAll(".score");

const submitBtn = document.getElementById("submit-btn");

const feedback = document.getElementById("feedback");

const feedText = document.getElementById("feed-text");

// functions
const scoreClickHandle = (e) => {
  scores.forEach((score) => {
    score.classList.remove("active");
  });
  e.target.classList.add("active");
};

const clickHandle = (e) => {
  const scoresArray = [...scores];
  const scoreElement = scoresArray.filter((score) => {
    return score.classList.contains("active");
  });
  if (scoreElement.length === 1) {
    ratingContainer.style.display = "none";
    feedback.style.display = "block";
    const score = scoreElement[0].innerText;
    feedText.innerText = `You selected ${score} out of 5`;
  }
};

// event listeners
scores.forEach((score) => {
  score.addEventListener("click", scoreClickHandle);
});

submitBtn.addEventListener("click", clickHandle);
