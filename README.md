# Location Search

A React and TypeScript location-search application featuring an interactive map.

**[Live Demo](https://location-search-seven.vercel.app/)** · **[Source Code](https://github.com/Ned-Magician/location-search)**

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Leaflet and React Leaflet
- OpenStreetMap tiles and Nominatim location search

## Features

- Search for places by text query
- Retrieve and display up to five Nominatim results
- Select a result to move the map to its coordinates
- Display a map marker for the selected place
- Use typed location data and separated search/map components

## How It Works

1. A search form submits a query to the Nominatim endpoint.
2. The response is mapped into typed place objects.
3. Selecting a place updates React state.
4. React Leaflet flies to that location and displays a marker.

## Run Locally

```bash
npm install
npm run dev
```

## Available Checks

```bash
npm run lint
npm run build
```

## Notes

This project demonstrates a location-search interface, **not** page routing or navigation between application routes. The public Nominatim service has a [usage policy](https://operations.osmfoundation.org/policies/nominatim/) that should be respected.
