"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Recommendations from "@/components/Recommendations";
import { Destination } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Destination[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (queryToSearch: string) => {
    if (!queryToSearch.trim()) return;
    setIsSearching(true);

    try {
      const response = await fetch("/api/destinations/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: queryToSearch })
      });
      const data = await response.json();
      if (data.results) {
        setSearchResults(data.results);
        // Only update the "active" term once we actually have results for it
        setActiveSearchQuery(queryToSearch);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          isSearching={isSearching}
        />
        {searchResults !== null && (
          <Recommendations searchResults={searchResults} searchQuery={activeSearchQuery} />
        )}
      </main>
      <Footer />
    </div>
  );
}
