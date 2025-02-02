import { createClient } from "next-sanity"
 const client =createClient({
 projectId:"0fldvcu8",
 dataset:"products",
 useCdn:true,
 apiVersion: "2025-01-29"
})
export async function fetchdata({ query,params={}}:{query:string,params?:any}){
    return await client.fetch(query,params)
}