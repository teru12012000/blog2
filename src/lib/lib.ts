import { MicroCMSQueries, createClient } from "microcms-js-sdk";

const client=createClient({
  serviceDomain:import.meta.env.DOMAIN as string,
  apiKey:import.meta.env.API_KEY as string,
})

export const getBlogDetail=async(queries:MicroCMSQueries)=>{
  return await client.get({endpoint:"blog2",queries:queries})
}

export const getBlogData=async(id:string,queries:MicroCMSQueries)=>{
  return await client.get({endpoint:"blog2",contentId:id,queries:queries});
}