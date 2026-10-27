import type { Place } from "./Place";

interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}

export const search = async (term: string): Promise<Place[]> => {
  const params = new URLSearchParams({
    q: term.trim(),
    format: "geojson",
    addressdetails: "1",
    layer: "address",
    limit: "5",
  });

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Location search request failed.");
  }

  const data: SearchResponse = await response.json();

  if (!Array.isArray(data.features)) {
    throw new Error("Unexpected location search response.");
  }

  return data.features.map((feature) => ({
    id: feature.properties.place_id,
    name: feature.properties.display_name,
    longitude: feature.geometry.coordinates[0],
    latitude: feature.geometry.coordinates[1],
  }));
};
