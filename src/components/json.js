import { useEffect } from 'react';
import { useState } from 'react';
import json from '../posts.json'

const Json = () => {
 const [data,setData] = useState(null);

 useEffect(() => {
  setData(JSON.stringify(json));
 },[setData])

 return data
};

export default Json;