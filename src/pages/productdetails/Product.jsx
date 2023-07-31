import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "../../components/carousel/carousel";
import "./Product.css";
import Accordion from "../../components/accordion/accordion";
import Header from "../../components/header/Header";
import StarRating from "../../components/ratings/ratings";
import Footer from "../../components/footer/Footer";
import Nomatch from "../../components/nomatch/Nomatch";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`data/produit.json`)
      .then((response) => {
        const products = response.data;
        const selectedProduct = products.find(
          (product) => product.id === productId
        );
     
        setProduct(selectedProduct);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [productId]);
  useEffect(() => {});

  if (!product) {
    return <Nomatch/>
  }

  return (
    <>
    < div className="glob">
      <Header />

      <Carousel images={product.pictures} />
      
      <div className="wrapper">
        <div className="left-div">
          <div className="top-left">
             <h1>{product.title}</h1>
             <p className="location">{product.location}</p>
          </div>
             
          <div className="tag-container">
            {product.tags.map((tag) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          
        </div>
        <div className="right-div">
          <div className="profile">
            <div className="profile-name">{product.host.name}</div>
            <img src={product.host.picture} alt="" />
          </div>
          
          <div className="rating">
             <StarRating Rating={product.rating}/>
          </div>
        </div>  

        </div>   
          
                      <div className="accordions">
                          <div className="accordion-right">
                          <Accordion title="Équipements" description={product.equipments} />
                          </div>
                        
                        <div className="accordion-left">
                        <Accordion title="Description" description={product.description} />
                        </div>
                      </div>
        
                       
        
      </div>
      <Footer/>
      </>
    
  );
}
