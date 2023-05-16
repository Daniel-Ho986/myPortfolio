import { createContext } from 'react';
import { Company, PersonalDetails, Project } from './types';
import { personalDetailsDefault, CompanyDetailsDefault } from './constants';

export const PersonalDetailsContext = createContext<PersonalDetails>(personalDetailsDefault);
export const ProjectDetailsContext = createContext<Project[] | undefined>(undefined);
export const CompanyDetailsContext = createContext<Company[]>(CompanyDetailsDefault);
