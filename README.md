# React TypeScript Scss Material UI

## How to run

#### Option 1

- Install Node.js 12

```
    > npm install
    > npm run build
    > npm run start
```

- Open your browser and navigate to `localhost:3000`

#### Option 2

- Install Docker

```
    > docker build -t react-next-ts-scss-mat .
    > docker run -p 3000:3000 react-next-ts-scss-mat
```

- Open your browser and navigate to `localhost:3000`

## Folder Structure

    - layouts: main app layouts
    - pages: route url will follow folder structure and file name
    - components: reusable components
    - scss: global and reusable styles
    - public: will serve as static
    - services: used for API integration or perform task or store data as singleton

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript)
