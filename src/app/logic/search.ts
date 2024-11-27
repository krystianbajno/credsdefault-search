import { Credential } from '@/app/interfaces/credential';

export const search = (searchTerm: string, credentials: Credential[]): Credential[] => {
  const normalizedSearchTerm = searchTerm.toLowerCase();
  const searchTokens = normalizedSearchTerm.split(' ').filter(Boolean);

  if (!searchTokens.length) return credentials;

  return credentials.filter(credential => {
    const credentialString = [
      credential.manufacturer,
      credential.model,
      credential.version,
      credential.role,
      credential.login,
      credential.password,
      credential.method,
      credential.source,
      credential.comment,
      credential.port,
      credential.address
    ]
      .join(' ')
      .toLowerCase();

    return searchTokens.every(token => credentialString.includes(token));
  });
};
