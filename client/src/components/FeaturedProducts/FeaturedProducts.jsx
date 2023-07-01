import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          While we offer a wide range of products, we place strong emphasis on curation. We identify fashion-forward brands, vetting for style and quality, and further select styles within these brands to offer. We also place importance on selling full-price products, reducing reliance on discounting, and selling the latest season’s designs. In addition, we use digital content, personalized mobile application experiences and proprietary recommendation algorithms, to build differentiated style-driven, discovery-led experiences for consumers.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
