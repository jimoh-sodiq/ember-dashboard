This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Live Demo

visit [https://ember-dashboard-nine.vercel.app]

## Local development

First, install and run the development server using pnpm (this is currently better that both npm and yarn):
[https://pnpm.io/benchmarks]

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

The app follows the recommended next.js folder structure
- Every directory in src/app/ acs as a new module
- since next.js uses colocation, the modules will each have their own components, lib, utils, types etc, directory or files. This will ease managing the project as it grows
- the src/components/ui contains shared components across the entire app and components from external libraires (shadcn-ui)
- the src/lib and src/hooks directory contains shared lib utils and hooks across the entire app

## Data Fetching

Approach used - Streaming using React Server component and Suspense API
- RSC is used in fetching the contacts for speed improvements. this would make the request lightening fast as it is rendered when the site is built
- Every request is saved the the respective modules /lib/ directory. (data.ts file) 
- Loading states is handle using Skeleton as this help give a sense of fast progress to the users
- error was handled using the recommended error.tsx file for each module, in this case the dashboad holds it in order to catch runtime errors


## Improvements
- the api selected does not include sorting, and pagination.
- error handling can be handled using an error boundary to prevent error propagation
