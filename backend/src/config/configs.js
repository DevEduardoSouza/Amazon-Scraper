export const configs = {
  port: process.env.PORT || 3000,
  mongoURI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/amazon-scraper",
  secret: process.env.SECRET || "secret",
  siteName: "Amazon",
  urlBase: "https://www.amazon.com/s?",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.3",
  },
};
