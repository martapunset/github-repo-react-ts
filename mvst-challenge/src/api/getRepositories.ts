import axios from "axios";
import { Repository } from "../interfaces/types";
const BASE_URL = "https://api.github.com";


export async function getRepositoriesByUser(username: string): Promise<Repository[]> {
    const url:string = `${BASE_URL}/users/${username}/repos`;
    const headers: object = { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }; 
    

  try {
      const response = await axios.get(url, {headers});
      console.log("..raw response....",response.data)
    const repositories = response.data.map((repo: any) => ({
      id:repo.id,
      name: repo.name,
      html_url: repo.html_url,
     description: repo.description,
     language: repo.language,
      updated_at:repo.updated_at
    }));
    console.log(repositories)
    return repositories;
  } catch (error) {
    console.error(`Error fetching repositories for user ${username}: ${error}`);
    return [];
  }
}

