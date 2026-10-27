# Location Search — React + TypeScript Map

An interactive location finder built with **React, TypeScript, Leaflet, and OpenStreetMap**. Search for a city or address, choose a result, and explore it directly on the map.

**[Try the live map](https://location-search-seven.vercel.app/)** · **[Developer's GitHub profile](https://github.com/Ned-Magician)**

## Features

- Location search through the **Nominatim geocoding API** (up to five results)
- Typed API response mapping and **URL-encoded** search queries
- Loading feedback and error handling for failed searches
- Interactive **React Leaflet** map and marker for a selected location
- Responsive layout: search above map on phones, side-by-side on wider screens

## Tech stack

**React 19 · TypeScript · Vite · Tailwind CSS 4 · Leaflet / React Leaflet · REST / JSON**

## How it works

1. Submit a city or address in the search form.
2. The app requests matching places from the Nominatim API.
3. A result is converted into a typed place object.
4. Selecting **Go** updates React state; the map flies to the selected coordinates and displays a marker.

## Project structure

```text
src/
  api/
    Place.ts
    search.ts
  components/
    LocationSearch.tsx
    Map.tsx
  App.tsx
```

## Run locally

```bash
npm install
npm run dev
```

## Available checks

```bash
npm run lint
npm run build
```

## Notes

This is a frontend map/search prototype, not a turn-by-turn navigation service or full geocoding platform. It uses the public [OpenStreetMap tile service](https://operations.osmfoundation.org/policies/tiles/) and [Nominatim API](https://operations.osmfoundation.org/policies/nominatim/); requests are subject to those services' usage policies.

[**More selected work**](https://github.com/Ned-Magician)
