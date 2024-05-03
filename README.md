# Amazon Scraper API Documentation

## How to Use Front-end e Back-end

### Backend

1. **Clone the repository:**

```bash
git clone https://github.com/DevEduardoSouza/Amazon-Scraper.git
```

2. **Navigate to the backend directory:**

```bash
cd amazon-scraper/backend
```


3. **Install dependencies:**

```bash
  npm install
````

4. **Start the server:**

```bash
  npm run start
````

### FrontEnd

1. **Clone the repository:**

```bash
git clone https://github.com/DevEduardoSouza/Amazon-Scraper.git
```

2. **Navigate to the backend directory:**

```bash
cd amazon-scraper/frontend
```

3. **Install dependencies:**

```bash
  npm install
````

4. **Open the file and click on index.html**

```bash
  \amazon-scraper\frontend\index.html
````

## Now you can use


![Imagem Completa](frontend/imgs/img-full.png)

------

The Amazon Scraper API allows users to retrieve product information from Amazon based on a keyword.

## Base URL

The base URL for the API is:

http://localhost:3000

## Endpoints

### 1. Get Products by Keyword

Retrieves products from Amazon based on a keyword.

- **URL**: `/api/product/scraper`
- **Method**: `GET`
- **Query Parameters**:
  - `keyword`: The keyword to search for products on Amazon.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: 
    ```json
    {
      "products": [
        {
          "name": "Product Name",
          "numberOfReviews": 100,
          "rating": "4.5 stars",
          "imageUrl": "https://example.com/image.jpg"
        },
        ...
      ]
    }
    ```
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: 
    ```json
    {
      "error": "Missing keyword parameter"
    }
    ```

## How to Use

To retrieve products from Amazon, send a GET request to the `/api/product/scraper` endpoint with the `keyword` query parameter set to the desired search term. For example:

GET http://localhost:3000/api/product/scraper?keyword=laptop


This will return a JSON object containing an array of products matching the keyword "laptop" along with their details such as name, number of reviews, rating, and image URL.



