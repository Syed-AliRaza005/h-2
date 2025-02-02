"use client"
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import { Products } from "@/types/products";
import { useEffect, useState } from "react";
import { allproducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const ButtonCart=()=>{
    const[button,setbutton]=useState<Products[]>([]);


    
      useEffect(() => {
        async function fetchProduct() {
          const fetchedProduct: Products[] = await client.fetch(allproducts);
          setbutton(fetchedProduct);
        }
        fetchProduct();
      }, []);

      const  handleAddToCart = (e: React.MouseEvent, product: Products) => {
        e.preventDefault();
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: `added to cart`,
          showConfirmButton: false,
          timer: 1000,
        });
        addToCart(product);
       
      };      
        // useEffect(() => {
        //   const fetchData = async () => {
        //     try {
        //       const response = await client.fetch(allproducts);
        //       setbutton(response);
        //       setError(false);
        //     } catch (err) {
        //       console.error(err);
        //       setError(true);
        //     } finally {
        //       setLoading(false);
        //     }
        //   };
      
        //   fetchData();
        // }, []);

      return(
        <button onClick={handleAddToCart} className="btn btn-primary btn-block">Add to Cart</button>
      )
}

export default ButtonCart;