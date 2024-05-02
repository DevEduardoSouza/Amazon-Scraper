export class Product {
  constructor(title, rating, numberOfReviews, imageUrl) {
    this.title = title;
    this.rating = rating;
    this.numberOfReviews = numberOfReviews;
    this.imageUrl = imageUrl;
  }

  getTitle() {
    return this.title;
  }

  getRating() {
    return this.rating;
  }

  getNumberOfReviews() {
    return this.numberOfReviews;
  }

  getImageUrl() {
    return this.imageUrl;
  }
}
