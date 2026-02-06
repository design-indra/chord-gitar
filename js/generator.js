const chordKeys = {
  C: ["C", "Dm", "Em", "F", "G", "Am"],
  G: ["G", "Am", "Bm", "C", "D", "Em"],
  D: ["D", "Em", "F#m", "G", "A", "Bm"],
  A: ["A", "Bm", "C#m", "D", "E", "F#m"]
};

const progressions = [
  [0, 4, 5, 3], // I V vi IV
  [0, 3, 4],    // I IV V
  [5, 3, 0, 4], // vi IV I V
  [0, 5, 3, 4]  // I vi IV V
];

const lyrics = [
  "Ku terdiam memandang langit\nMengingat kisah tentangmu",
  "Rindu ini tak pernah usai\nMenunggu kau kembali",
  "Langkahku terhenti di sini\nMencari arti cinta",
  "Malam datang membawa sepi\nHati ini tetap menanti"
];

function generateSong(i) {
  const keys = Object.keys(chordKeys);
  const key = keys[i % keys.length];
  const chords = chordKeys[key];
  const prog = progressions[i % progressions.length];

  const chordLine = prog.map(p => chords[p]).join("  ");
  const lyric = lyrics[i % lyrics.length];

  return {
    title: `Lagu AI ${i + 1} (${key})`,
    chord: `${chordLine}\n${lyric}`
  };
}

function generateSongs(total = 2000) {
  const songs = [];
  for (let i = 0; i < total; i++) {
    songs.push(generateSong(i));
  }
  return songs;
}
