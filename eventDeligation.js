const parentList = document.getElementById("parent-list");

parentList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});
