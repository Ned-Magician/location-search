import type { FormEvent } from "react";
import type { Place } from "../api/Place";
import { useState } from "react";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!term.trim() || isLoading) return;

    setIsLoading(true);
    setError("");
    setPlaces([]);

    try {
      const results = await search(term);
      setPlaces(results);
    } catch {
      setError("Could not search locations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-label="Location search">
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">Search for a place</label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          disabled={isLoading}
          placeholder="City or address"
        />
        <button
          type="submit"
          disabled={isLoading || !term.trim()}
          className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      <h2 className="font-bold mt-6">Found locations</h2>
      <div aria-live="polite" role="status" className="mt-2">
        {isLoading && <p>Searching for places...</p>}
        {error && <p className="text-red-700">{error}</p>}
        {!isLoading && !error && places.length === 0 && (
          <p className="text-sm text-gray-600">Search to see matching locations.</p>
        )}
      </div>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {places.map((place) => (
          <div key={place.id} className="col-span-2 grid grid-cols-[1fr_40px] gap-2 items-center border-b py-2">
            <p className="text-sm break-words">{place.name}</p>
            <button
              type="button"
              className="bg-blue-500 text-xs text-white font-bold rounded px-1 py-2"
              onClick={() => onPlaceClick(place)}
            >
              Go
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
