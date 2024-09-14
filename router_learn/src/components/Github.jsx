import React,{useState,  useEffect} from 'react'

export default function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users/singhpritpal04")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((data) => {console.log(data)
    setData(data)});
    }, []); 
  return (
    <div>
      <h1>Github Followers: {data.followers} </h1>
      <img src={data.avatar_url} alt="avatar" width="200" />
    </div>
  );
}
