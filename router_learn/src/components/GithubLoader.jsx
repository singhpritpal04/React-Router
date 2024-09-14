import React from 'react'
import { useLoaderData } from "react-router-dom";

export default function GithubLoader() {
    const data = useLoaderData();
  return (
    <div>
      <h1>Github Followers: {data.followers} </h1>
      <img src={data.avatar_url} alt="avatar" width="200" />
    </div>
  );
}

// export function githubLoaderInfo = async () => {
//     const response = await fetch("https://api.github.com/users/singhpritpal04");
//     return response.json();
// }