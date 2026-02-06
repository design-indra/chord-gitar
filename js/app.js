const list = document.getElementById("list");
const search = document.getElementById("search");

const songs = generateSongs(2000); // JUMLAH LAGU

function render(data) {
  list.innerHTML = "";
  data.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => {
      location.href =
        `chord.html?title=${encodeURIComponent(song.title)}&chord=${encodeURIComponent(song.chord)}`;
    };
    list.appendChild(li);
  });
}

search.addEventListener("input", function () {
  const key = this.value.toLowerCase();
  render(songs.filter(s => s.title.toLowerCase().includes(key)));
});

render(songs);
