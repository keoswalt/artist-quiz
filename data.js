// Artist Object Construction

const artistArray = [];

class Person {
  constructor(name, img) {
    this._name = name;
    this.img = img;
  }

  get name() {
    return this._name;
  }
}

class Artist extends Person {
  constructor(name, img, id) {
    super(name, img);
    artistArray.push(this);
    this.id = id;
  }
}

// Art Object Construction

const artArray = [];

class Art {
  constructor(title, year, artist, id, src) {
    this._title = title;
    this._year = year;
    this.artist = artist;
    this.src = src;
    this.id = id;
    artArray.push(this);
  }

  get year() {
    return this._year;
  }
}

class Painting extends Art {
  constructor(title, year, artist, id, src, style) {
    super(title, year, artist, id, src);
    this.style = style;
  }
}

// Adding Artists

const picasso = new Artist("Pablo Picasso", "/images/artists/Picasso.png", "picasso");
const georgia = new Artist("Georgia O'Keefe", "/images/artists/Georgia.png", "okeefe");
const matisse = new Artist("Henri Matisse", "/images/artists/Matisse.png", "matisse");

// Adding Art

const guernica = new Art(
  "Guernica",
  1937,
  picasso,
  "guernica",
  "/images/artwork/picasso/guernica.jpg",
);

const oldGuitarist = new Art(
    "The Old Guitarist",
    1904,
    picasso,
    "oldguitarist",
    "/images/artwork/picasso/oldguitarist.jpg"
  );

  const lesDemoisellesDAvignon = new Art(
    "Les Demoiselles d'Avignon",
    1907,
    picasso,
    "lesdemoisellesdavignon",
    "/images/artwork/picasso/lesdamoisellesdavignon.jpg"
  );

  const redCanna = new Art(
    "Red Canna",
    1915,
    georgia,
    "redcanna",
    "/images/artwork/georgia/redcanna.jpg"
  );

  const orientalPoppies = new Art(
    "Oriental Poppies",
    1927,
    georgia,
    "orientalpoppies",
    "/images/artwork/georgia/orientalpoppies.jpg"
  );

  const musicPinkAndBlueNo2 = new Art(
    "Music, Pink and Blue No. 2",
    1918,
    georgia,
    "musicpinkandblueno2",
    "/images/artwork/georgia/musicpinkandblueno2.jpeg"
  );

  const lakeGeorge = new Art(
    "Lake George",
    1922,
    georgia,
    "lakegeorge",
    "/images/artwork/georgia/lakegeorge.png"
  );

  const theDance = new Art(
    "The Dance",
    1910,
    matisse,
    "thedance",
    "/images/artwork/matisse/thedance.jpg"
  );

  const theRedStudio = new Art(
    "The Red Studio",
    1911,
    matisse,
    "theredstudio",
    "/images/artwork/matisse/redstudio.jpg"
  );

  const portraitOfMadameMatisse = new Art(
    "Portrait of Madame Matisse",
    1905,
    matisse,
    "portraitofmadamematisse",
    "/images/artwork/matisse/portraitofmadamematisse.jpg"
  );

  const harmonyInRed = new Art(
    "Harmony in Red",
    1908,
    matisse,
    "harmonyinred",
    "/images/artwork/matisse/harmonyinred.jpg"
  );

// Exporting Data

export { artistArray, artArray };
