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

const picasso = new Artist("Pablo Picasso", "images/artists/Picasso.png", "picasso");
const okeefe = new Artist("Georgia O'Keefe", "images/artists/Georgia.png", "okeefe");
const matisse = new Artist("Henri Matisse", "images/artists/Matisse.png", "matisse");

// Adding Art

const guernica = new Painting(
  "Guernica",
  1937,
  picasso,
  "guernica",
  "/images/artwork/Picasso1.jpg",
  "Cubism"
);

console.log(guernica);
