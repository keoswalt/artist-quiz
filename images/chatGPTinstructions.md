I have set up the following JavaScript class for Art.

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

Here's an example of creating a const variable for a painting called "Guernica."

const guernica = new Art(
  "Guernica",
  1937,
  picasso,
  "guernica",
  "/images/artwork/guernica.jpg"
);

Following this model, can you create a new object for each of the images I've attached? You can leave the year empty. The artist for each is "picasso." The file path for each will be ./images/artwork/picasso + the image's title.