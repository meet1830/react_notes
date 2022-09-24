import React from "react";

const bestSellerList = [
  {
    id: 1,
    name: "Aloe Blizzard Plant",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeblizzard_top_1.png?v=1661328736",
    oldPrice: 499,
    newPrice: 399,
  },
  {
    id: 2,
    name: "Aloe Juvenna Plant",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460",
    oldPrice: 499,
    newPrice: 399,
  },
  {
    id: 3,
    name: "Aloe Vera Green Mini Plant",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveragreenmini_top_1.png?v=1661323067",
    oldPrice: 499,
    newPrice: 399,
  },
  {
    id: 4,
    name: "Aloe Vera Mini Plant",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945",
    oldPrice: 499,
    newPrice: 349,
  },
  {
    id: 5,
    name: "Tulsi",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945",
    oldPrice: 199,
    newPrice: 149,
  },
  {
    id: 6,
    name: "Rose",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945",
    oldPrice: 199,
    newPrice: 149,
  },
  {
    id: 7,
    name: "Cactus",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945",
    oldPrice: 199,
    newPrice: 149,
  },
  {
    id: 8,
    name: "Hibiscus",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945",
    oldPrice: 199,
    newPrice: 149,
  },
  {
    id: 9,
    name: "Ashwagandha",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945",
    oldPrice: 199,
    newPrice: 149,
  },
  {
    id: 10,
    name: "Bonsai",
    src: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945",
    oldPrice: 199,
    newPrice: 149,
  },
];

function Bestseller() {
  return (
    <div className="home-bestseller-container">
      <p className="section-heading">BestSellers</p>
      <div className="bestseller-row">
      {
        bestSellerList.map((item) => 
            {
                <div className="item-card" key={item.id}>
                <img src={item.src} alt={item.name} />
                <p className="item-name">{item.name}</p>
                <p className="item-price">Rs. {item.newPrice}</p>
                <p className="item-old-price">Rs. {item.oldPrice}</p>
                <button className="btn btn-primary">Add to Cart</button>
                </div>;
            }
        )
      }
      </div>
    </div>
  );
}

export default Bestseller;
