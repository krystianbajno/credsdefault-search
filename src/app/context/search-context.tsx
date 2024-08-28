import React, { createContext, useContext, useState, useCallback } from "react";
import { Credential } from "@/app/interfaces/credential";
import { downloadCredentialCsv } from "@/app/logic/csv";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  allCredentials: Credential[];
  setAllCredentials: React.Dispatch<React.SetStateAction<Credential[]>>;
  filteredCredentials: Credential[];
  setFilteredCredentials: React.Dispatch<React.SetStateAction<Credential[]>>;
  displayedCredentials: Credential[];
  setDisplayedCredentials: React.Dispatch<React.SetStateAction<Credential[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  downloadCsv: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [allCredentials, setAllCredentials] = useState<Credential[]>([]);
  const [filteredCredentials, setFilteredCredentials] = useState<Credential[]>([]);
  const [displayedCredentials, setDisplayedCredentials] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const downloadCsv = useCallback(() => {
    if (filteredCredentials.length === 0) {
      alert("No data to download");
      return;
    }
    downloadCredentialCsv(filteredCredentials);
  }, [filteredCredentials]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        allCredentials,
        setAllCredentials,
        setDisplayedCredentials,
        displayedCredentials,
        filteredCredentials,
        setFilteredCredentials,
        loading,
        setLoading,
        error,
        setError,
        page,
        setPage,
        downloadCsv,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
