const songs = [
  "Dewa 19 - Kangen",
  "Sheila On 7 - Dan",
  "Iwan Fals - Ibu",
  "Peterpan - Mimpi Yang Sempurna"
];

const list = document.getElementById("list");
const search = document.getElementById("search");

function render(data) {
  list.innerHTML = "";
  data.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;
    list.appendChild(li);
  });
}

search.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = songs.filter(s =>
    s.toLowerCase().includes(keyword)
  );
  render(filtered);
});

render(songs);
