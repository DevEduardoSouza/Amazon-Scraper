export const createCard = (card) => {
  const containerCard = document.createElement("div");
  containerCard.classList.add("card");

  card.price = `$${card.price}`;

  containerCard.innerHTML = `
  <div class="card-img">
                <img
                  src="${card.imageUrl}"
                  alt="${card.name}"
                />
              </div>
              <div class="card-details">
                <div class="card-details-top">
                  <div class="card-title">
                    <span class="icon">
                      <i class="bi bi-bag"></i>
                    </span>
                    <span class="title">
                    ${card.name}
                    </span>
                  </div>

                  <div class="card-price">
                    <span>
                      <i class="bi bi-dollar"></i>
                    </span>
                    <span class="name">Price</span>
                    <span class="value">${card.price}</span>
                  </div>
                </div>

                <div class="card-details-bottom">
                  <div class="side-left">
                    <div class="rating">
                      <span class="icon">
                        <i class="bi bi-star-fill"></i>
                      </span>
                      <span class="name">Rating</span>
                      <span class="value">${card.rating}</span>
                    </div>
                    <div class="numberOfReviews">
                      <span>
                        <i class="bi bi-chat-left-text"></i>
                      </span>
                      <span class="name">Reviews</span>
                      <span class="value">${card.numberOfReviews}</span>
                    </div>
                  </div>
                  <div class="side-rigth">
                    <a href="${card.link}" target="_blank">
                            <div class="link">
                            
                                <span>
                                <i class="bi bi-arrow-right-circle"></i>
                                </span>
                                <span class="name"> View Product </span>
                            
                            </div>
                            <div class="ecommerce">
                            <span>
                                <i class="bi bi-cart-plus"></i>
                            </span>
                            <span class="name">Amazon</span>
                            </div>
                        </a>
                  </div>

  `;

  return containerCard;
};
