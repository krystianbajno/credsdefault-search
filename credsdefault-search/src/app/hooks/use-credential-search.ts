import { useEffect, useCallback } from 'react';
import { Credentials } from '@/app/logic/api/credentials-api';
import { useSearch } from '@/app/context/search-context';
import { search } from '@/app/logic/search';
import { Credential } from '../interfaces/credential';

export const useCredentialSearch = (itemsPerPage: number = 24) => {
  const {
    searchTerm,
    allCredentials,
    setAllCredentials,
    setFilteredCredentials,
    setDisplayedCredentials,
    setLoading,
    setError,
    page,
  } = useSearch();

  const countDashFields = (credential: Credential) => {
    return Object.values(credential).filter(value => value === '-').length;
  };

  const fetchCredentials = useCallback(async () => {
    setLoading(true);
    try {
      const data = await Credentials.get();
      setAllCredentials(data);
      const filtered = search(searchTerm, data);

      const sortedFiltered = filtered.sort((a, b) => countDashFields(a) - countDashFields(b));

      setFilteredCredentials(sortedFiltered); 
      setDisplayedCredentials(sortedFiltered.slice(0, itemsPerPage)); 
    } catch (error) {
      setError("Failed to fetch credentials");
      console.error("Error fetching credentials:", error);
    } finally {
      setLoading(false);
    }
  }, [setAllCredentials, searchTerm, setFilteredCredentials, setDisplayedCredentials, setLoading, setError, itemsPerPage]);

  useEffect(() => {
    fetchCredentials();
  }, [fetchCredentials]);

  useEffect(() => {
    if (allCredentials.length > 0) {
      const filtered = search(searchTerm, allCredentials);

      const sortedFiltered = filtered.sort((a, b) => countDashFields(a) - countDashFields(b));

      const paginated = sortedFiltered.slice(0, page * itemsPerPage);
      setFilteredCredentials(sortedFiltered);
      setDisplayedCredentials(paginated);
    }
  }, [page, searchTerm, allCredentials, setFilteredCredentials, setDisplayedCredentials, itemsPerPage]);
};
