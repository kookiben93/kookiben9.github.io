const searchBar = document.getElementById("searchBar");

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(p => p.dataset.original = p.innerHTML);

searchBar.addEventListener("input", function() {
  const query = this.value.trim();

  paragraphs.forEach(p => {
    const original = p.dataset.original;

    if (query === "") {
      p.innerHTML = original;
      return;
    }

    const regex = new RegExp(`(${query})`, "gi");

    p.innerHTML = original.replace(regex, `<span class="highlight">$1</span>`);
  });
});