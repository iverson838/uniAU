import axios from "axios";

import React, { useState, useEffect } from "react";

const url = "http://universities.hipolabs.com/search?country=Australia";

const AxiosAPI = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Ola</h1>
      {post.map((courseName, index) => {
        return <li key={index}>{courseName.name}</li>;
      })}
    </div>
  );
};

export default AxiosAPI;
