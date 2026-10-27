import type { Place } from "./api/Place";
import { useState } from "react";
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <main className="flex min-h-screen flex-col md:h-screen md:flex-row">
      <aside className="w-full border-b border-gray-200 bg-white p-4 md:h-full md:w-80 md:shrink-0 md:overflow-y-auto md:border-b-0 md:border-r">
        <h1 className="mb-4 text-xl font-bold">Location Search</h1>
        <LocationSearch onPlaceClick={setPlace} />
      </aside>
      <div className="h-[60vh] min-h-[320px] w-full flex-1 md:h-full md:min-h-0">
        <Map place={place} />
      </div>
    </main>
  );
}

export default App;
