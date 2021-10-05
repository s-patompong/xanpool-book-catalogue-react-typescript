# Book Catalogue Frontend in React + TypeScript

This is a test project.

## Installation

First, copy .env.example file to .env

```bash
$ cp .env.example .env
```

Then, edit `.env` file to make sure that the VITE_SERVER_URL is the correct server URL and port.
For example, if the server is running at http://localhost:9999, update VITE_SERVER_URL like so:

```
VITE_SERVER_URL=http://localhost:9999
```

Once you've finished updating .env file, run these commands:

```bash
# Make sure to use the same node version with the repo
$ nvm use

# Install the dependencies
$ npm install

# Boot up the development server
$ npm run dev
```

## Lint

To line the code, run:

```
$ npm run lint
```

## Format

To let prettify auto format the code, run:

```
npm run format
```
