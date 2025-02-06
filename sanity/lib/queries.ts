import { groq } from "next-sanity";
export const allproducts = groq`*[_type=="product"]`
export const searchProducts = groq`*[_type=="product" && isInSearch == true]`
