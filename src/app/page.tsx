"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Recommendations from "@/components/Recommendations";
import { SearchResult } from "@/types";

export default function Home() {
  // `searchQuery` tracks the live input in the search box (used by the Hero component).
  const [searchQuery, setSearchQuery] = useState("");

  // `activeSearchQuery` tracks the query that actually produced the *current* set of results.
  // Why two states? If a user types "Beach" and hits search, activeSearchQuery becomes "Beach". 
  // If they then type "Mountain" into the input but *haven't* hit search yet, we still want the 
  // Recommendations header to say "Results for Beach", preventing a UI mismatch during typing.
  const [activeSearchQuery, setActiveSearchQuery] = useState("");

  // Holds the actual AI-returned destination matches. Null means "hasn't searched yet".
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
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

      // We explicitly check for 429 to provide immediate, actionable feedback to the user,
      // as relying solely on '!response.ok' might obscure that they are just sending too many requests.
      if (response.status === 429) {
        alert(data.error || "Too many requests. Please try again later.");
        setSearchResults([]);
        return;
      }

      if (!response.ok) {
        console.error("Search failed:", data.error);
        setSearchResults([]);
        return;
      }

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
          <Recommendations searchResults={searchResults} searchQuery={activeSearchQuery} isSearching={isSearching} />
        )}
      </main>
      <Footer />
    </div>
  );
}
