function flipCard(container) {
  if (container.classList.contains("flipped")) {
    container.classList.remove("flipped");
  } else {
    container.classList.add("flipped");
  }
}