export interface User {
  avatar_url: string;
  name: string;
  login: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  email: string;
}

export interface Repos {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}

export interface Repository {
  id:number
  name: string;
  html_url: string;
    description: string;
    language: string;
    updated_at: string;
}