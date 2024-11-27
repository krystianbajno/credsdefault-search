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
    filteredCredentials,
    setFilteredCredentials,
    setDisplayedCredentials,
    setLoading,
    setError,
    page,
    setPage,
  } = useSearch();

  const countDashFields = (credential: Credential) => {
    return Object.values(credential).filter(value => value === '-').length;
  };

  const fetchCredentials = useCallback(async () => {
    setLoading(true);
    try {
      const data = await Credentials.get();
      setAllCredentials(data);
    } catch (error) {
      setError('Failed to fetch credentials');
      console.error('Error fetching credentials:', error);
    } finally {
      setLoading(false);
    }
  }, [setAllCredentials, setLoading, setError]);

  useEffect(() => {
    fetchCredentials();
  }, [fetchCredentials]);

  useEffect(() => {
    if (allCredentials.length > 0) {
      setPage(1);

      let filtered = [];

      if (searchTerm) {
        filtered = search(searchTerm, allCredentials);
      } else {
        filtered = allCredentials;
      }

      const sortedFiltered = filtered.sort(
        (a, b) => countDashFields(a) - countDashFields(b)
      );

      setFilteredCredentials(sortedFiltered);

      const paginated = sortedFiltered.slice(0, itemsPerPage);
      setDisplayedCredentials(paginated);
    }
  }, [
    searchTerm,
    allCredentials,
    setFilteredCredentials,
    setDisplayedCredentials,
    itemsPerPage,
    setPage,
  ]);

  useEffect(() => {
    if (filteredCredentials.length > 0) {
      const paginated = filteredCredentials.slice(0, page * itemsPerPage);
      setDisplayedCredentials(paginated);
    }
  }, [
    page,
    filteredCredentials,
    setDisplayedCredentials,
    itemsPerPage,
  ]);
};
