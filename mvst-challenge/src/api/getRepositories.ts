import axios from "axios";

const BASE_URL = "https://api.github.com";

interface Repository {
  name: string;
  html_url: string;
    description: string;
    language: string;
    updated_at: string;
}

export async function getRepositoriesByUser(username: string): Promise<Repository[]> {
    const url:string = `${BASE_URL}/users/${username}/repos`;
    const headers: object = { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }; 
    

  try {
      const response = await axios.get(url, {headers});
      console.log("..raw response....",response.data)
    const repositories = response.data.map((repo: any) => ({
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

