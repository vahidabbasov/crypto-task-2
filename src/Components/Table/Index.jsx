import React, { Fragment, useEffect, useState } from "react";
import { getData } from "../../Service/getData";
import "./Index.css";
import { FaHeart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { addProduct } from "../../Redux/Slice/favourites";
import { useDispatch } from "react-redux";
function Index() {
  const [products, setProducts] = useState([]);
  let [search, setSearch] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then((res) => {
      if (search) {
        let filter = res.data.filter((x)=>{
          return x.name
          .toLowerCase()
          .includes(search.toLowerCase());
        });
        setProducts(filter)
      }else{
      setProducts(res.data);

      }
    });
  }, [search]);

  return (
    <>
    
      <div className="container">
        <div className="container__header">
          <h1>Crypto Tracker Application</h1>
          <div className="input">
          <input placeholder="Search by crypto name" type="text" onChange={(e)=>{
            let value = e.target.value
            setSearch(value)
          }}/>
          <span className="searchIcon">
          <FaSearchDollar/>

          </span>

          </div>
          
        </div>
        <div className="container__content">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Coin Name</th>
              <th>Price</th>
              <th className="priceChange">Price Change</th>
              <th className="market">Market Cap</th>
              <th>Add To Fav</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="td">{product.market_cap_rank}</td>
                  <td className="name td">
                    <img className="crLogo" src={`${product.image}`} alt="" />{" "}
                    {product.name}
                  </td>
                  <td className="td" style={{color: "#FFCC00"}}>
                    <b>
                    {"$"}
                    {product.current_price}

                    </b>
                    
                  </td>
                  <td
                    className="td priceChange"
                    style={{
                      color:
                        product.market_cap_change_percentage_24h > 0
                          ? "#4BB543"
                          : "#FF3333",
                    }}
                  >
                    <b>
                      {product.market_cap_change_percentage_24h > 0 ? `${product.market_cap_change_percentage_24h }${'%'}` : `${product.market_cap_change_percentage_24h}${'%'}`}
                    {/* {product.market_cap_change_percentage_24h}{'%'} */}
                    

                    </b>
                  </td>
                  <td className="td market" style={{color: "grey", fontSize:"16px", fontWeight:"500"}}>
                    {"$"}
                    {product.market_cap}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                    className="btn"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        color: "red",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={()=>{
                        dispatch(addProduct(product))
                      }}
                    >
                        

                      <i><FaHeart /></i>
                      

                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        </div>
       
      </div>
    </>
  );
}

export default Index;
