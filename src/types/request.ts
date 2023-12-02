export interface Interest {
  id: string;
  name: string;
}

export interface CompanySize {
  id: string;
  name: string;
  description: string;
}

export interface Preferences {
  communication: boolean;
  social: boolean;
}

export interface Error {
  message: string;
}

export interface User {
  email: string;
  name: string;
}
