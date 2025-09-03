School Management Mini-Project
## Overview

This is a mini-project built using Next.js and React, with a MySQL (Avein) database. The project consists of two pages:

Add School (addSchool.jsx) – A responsive form to input and store school data, including name, address, city, state, contact, email, and an image. Input validations (like email format) are implemented. Images are stored in the schoolImages folder.

Show Schools (showSchools.jsx) – Displays the list of schools in a grid layout similar to an e-commerce website. Only the school’s name, address, city, and image are visible. The page is fully responsive.

## Features

Add schools with validations using react-hook-form.

Upload and store school images.

Fetch and display schools from the Avein MySQL database.

Responsive design for both desktop and mobile.

Clean and user-friendly UI.

## Tech Stack

Frontend: Next.js, React, Tailwind CSS

Backend: Next.js API routes

Database: MySQL (Avein)

Hosting: [Your Hosting Platform, e.g., Vercel]

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

