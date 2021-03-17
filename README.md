This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Type to build the container

```bash
docker build -t client . && docker run --name CLIENT_CONTAINER -p 0.0.0.0:5000:3000 client

```

go to http://localhost:5000
