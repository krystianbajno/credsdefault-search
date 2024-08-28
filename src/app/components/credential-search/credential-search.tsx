import React, { useEffect } from 'react';
import CredentialGrid from '@/app/components/grid/grid';
import CredentialSkeletonGrid from '@/app/components/grid/skeleton-grid';
import { useSearch } from '@/app/context/search-context';
import { useCredentialSearch } from '@/app/hooks/use-credential-search';
import { useInfiniteScroll } from '@/app/hooks/use-infinite-scroll';

const CredentialSearch: React.FC = () => {
  const { displayedCredentials, loading, error, setPage } = useSearch();
  useCredentialSearch();

  const observerRef = useInfiniteScroll({
    onIntersect: () => setPage(prevPage => prevPage + 1),
  });

  if (loading && displayedCredentials.length === 0) {
    return <CredentialSkeletonGrid dummy={12} />;
  }

  if (error) return <p>{error}</p>;

  return (
    <>
      {displayedCredentials.length > 0 ? (
        <>
          <CredentialGrid credentials={displayedCredentials} />
          <div ref={observerRef} style={{ height: '20px', background: 'transparent' }} />
        </>
      ) : (
        <p>No credentials found.</p>
      )}
    </>
  );
};

export default CredentialSearch;
