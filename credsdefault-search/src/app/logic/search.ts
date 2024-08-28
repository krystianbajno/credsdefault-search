import { Credential } from '@/app/interfaces/credential';

export const matchToken = (token: string, target: string): boolean => {
  return target.toLowerCase().includes(token.toLowerCase());
};

export const search = (searchTerm: string, credentials: Credential[]): Credential[] => {
  const normalizedSearchTerm = searchTerm.toLowerCase();
  const searchTokens = normalizedSearchTerm.split(' ').filter(Boolean);

  if (!searchTokens.length) return credentials;

  return credentials.filter(credential => {
    return searchTokens.some(token =>
      matchToken(token, credential.manufacturer) ||
      matchToken(token, credential.model) ||
      matchToken(token, credential.version) ||
      matchToken(token, credential.role) ||
      matchToken(token, credential.login) ||
      matchToken(token, credential.password) ||
      matchToken(token, credential.method) ||
      matchToken(token, credential.source) ||
      matchToken(token, credential.comment) ||
      matchToken(token, credential.port) ||
      matchToken(token, credential.address)
    );
  });
};

// Interface for CredentialEntry structure
export interface CredentialEntry {
  manufacturer: string;
  model: string;
  version: string;
  role: string;
  login: string;
  password: string;
  method: string;
  source: string;
  comment: string;
  port: string;
  address: string;
}
