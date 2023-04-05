# Nextjs fullstack template

Just a template containing couple of packages for me to get started faster

## Stack

- Nextjs
- tailwindcss

### Will add

- supabase
- prisma
- nextauth
- react query

## Getting started

- Install dependencies `yarn install`
- Create `.env` file so that prisma can read the environment variable. Not sure why it cannot read `.env.local` so we will live with this for now.
- Update `.env` with content of `env.example` file
- Run prisma migrate to populate tabels in your db based on schema.prisma `npx prisma migrate dev --name init`
- You can check your database that it now contains couple of tables

### Prisma notes

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
1. Run prisma db pull to turn your database schema into a Prisma schema.
1. Run prisma generate to generate the Prisma Client. You can then start querying your database.
