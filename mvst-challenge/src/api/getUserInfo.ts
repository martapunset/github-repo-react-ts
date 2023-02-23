import axios from "axios";

const BASE_URL:string = "https://api.github.com";

interface User {
    avatar_url: string ;
    name: string;
    login: string;
    html_url: string;
    bio: string;
    followers: number;
    following: number;
    email: string;

}

const defaultUser: User = {
  avatar_url: '',
  name: '',
  login: '',
  html_url: '',
  bio: '',
  followers: 0,
  following:0,
  email: ''
};

export async function getUserInfo(username: string): Promise<User > {
    const url = `${BASE_URL}/users/${username}`;
    const headers: object = { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }; 

  try {
      const response = await axios.get(url, {headers});
      console.log("..raw response USER....", response.data)
      
      const user: User = {
        login: response.data.login,
        html_url: response.data.html_url,
        avatar_url: response.data.avatar_url,
        name: response.data.name,
        bio: response.data.bio,
        followers: response.data.followers,
        following: response.data.following,
        email:response.data.email
      };
      return user;
      
   
  } catch (error) {
    console.error(`Error fetching user ${username}: ${error}`);
    //console.log(user)
    return defaultUser;
  }
}

