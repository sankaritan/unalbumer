# Unalbumer
React + Redux + Thunk learning project.

## Features

* Log in with Google account.
* Display photos that are not in any of your Google Photos Albums.
* Create new album.
* *Todo: Add existing photos without album to newly created album (Not supported by API at the moment)* 
* *Todo: Specify amount of albums and photos to search. Now limits are hard-coded to ~5 albums and ~50 photos*: [albums default value](src/api/photosClient.js#L52), [photos default value](src/api/photosClient.js#L75).

## Quick start

```
yarn install            # Setup the project
yarn run start          # Run the app (against real backend)
yarn run start:mocks    # Run the app against mocked backend (skipped Google login)
yarn run lint           # Run Eslint
yarn run test           # Run unit + UI tests
yarn run test:e2e       # Run E2E tests. Need to run 'yarn start:mocks' first.
```

## Tech Stack

Some notable libraries.

App

* React (Create React App template)
* Redux
* Redux Thunk middleware
* Redux Sagas
* React router (unused but set up)
* Eslint
* Axios HTTP request library
* Miligram css framework

+ Redux Ducks structure

Tests

* Unit - Jest
* UI - Jest + Enzyme (snapshots)
* E2E - Puppeteer
