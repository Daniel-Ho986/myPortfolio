import axios from 'axios';
import { Company, PersonalDetails, Project } from './types';
import { personalDetailsDefault } from './constants';

export const BASE_URL = `${process.env.BASE_URL}/api`;

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/me`);
    return data;
  } catch (err) {
    return personalDetailsDefault;
  }
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/projects`);
    return data;
  } catch (err) {
    return false;
  }
}
export async function getCompanyDetails(): Promise<Company[] | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/companies`);
    return data;
  } catch (err) {
    return false;
  }
}

export async function getGithubDetails(): Promise<unknown> {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/faievtsev/chatbot-ui`);
    return data;
  } catch (err) {
    return false;
  }
}
