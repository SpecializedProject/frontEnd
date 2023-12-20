import axios, * as others from 'axios';
import React,{useState, useEffect} from 'react';

const baseUrl = "http://localhost:3001/api/topics";

// Passing configuration object to axios

const getApis = async () => {

  const [listTopic, setListTopic] = useState([]);
  console.log("$$$====Use Axios:")
    try {
         const response = await axios.get("http://localhost:3000/api/lessons")
    
        //const arrData = Object.values(response);
        console.log("Response:" + response)
        //setListTopic(response.data)
    } catch (error) {
        console.log("====ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR:", error);
    }
   

    // const arrData = Object.values(res.data);
    // console.log("============================");
    // console.log(arrData);
    //listTopic = response.data;
  return listTopic

//   const handleDelete = async (id) => {
//     if (confirm(`Are you sure to delete this tutorial, id = ${id}`)) {
//       await axios.delete(`/${id}`);
//       await getListTutorials();
//     }
//  }
}
export default getApis