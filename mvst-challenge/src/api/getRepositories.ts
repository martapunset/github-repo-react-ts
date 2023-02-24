import axios from "axios";
import { Repository } from "../interfaces/types";
import { BASE_URL } from "./baseUrl";

/**
 * The function returns
 * @param username given username
 * @returns total of repositories of the given user
 */

export async function getRepositoriesByUser(username: string): Promise<Repository[]> {

    const url:string = `${BASE_URL}/users/${username}/repos`;
    const headers: object = { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }; 
    

  try {
    const response = await axios.get(url, {headers});
      
    const repositories = response.data.map((repo: any) => ({
      id:repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      updated_at:repo.updated_at
    }));
   
    return repositories;
  } catch (error) {
    console.error(`Error fetching repositories for user ${username}: ${error}`);
    return [];
  }
}

