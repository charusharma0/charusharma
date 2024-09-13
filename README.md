# NextAuth Login Form with API Integration
This project demonstrates how to implement authentication in a Next.js application using NextAuth with a custom login form and API integration.

## INTRODUCTION:
- NextAuth.js provides flexible authentication support for Next.js applications. It allows developers to add various authentication methods such as OAuth providers (Google, GitHub, Twitter, etc.), email/password-based credentials, and custom API authentication.
- NextAuth allows for a seamless integration of external APIs, making it ideal for custom authentication setups while providing robust session management and token handling.
- This setup provides developers the flexibility to authenticate users via APIs while utilizing the built-in benefits of NextAuth, such as session handling, JWT token management, and easy integration with OAuth providers.
- The process typically follows these steps:

1. Creating a custom login form to capture user credentials.
2. Sending the credentials to an external API for verification.
3. Handling the response, including access tokens, user information, and error handling.
4. Storing tokens and managing sessions using NextAuth’s callback functions.
5. Displaying user details on protected pages once authenticated.
   
## Overview
This project is a Next.js application that integrates NextAuth for user authentication. It supports login via an API using credentials and OAuth providers like Google, GitHub, and Twitter.

## Features
- Custom login form using an API.
- OAuth integration (Google, GitHub, Twitter).
- Session handling with JWT.
- Secure routes based on authentication status.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed (v16 or higher).
- A GitHub, Google, or Twitter developer account for OAuth integration.
- Access to a custom API that verifies user credentials and returns authentication tokens.
  
## Built With
- [Next.js](https://nextjs.org/) : Next.js is a React framework.
- [NextAuth](https://next-auth.js.org/) : NextAuth.js is a complete open-source authentication solution for Next.js applications.
- [Mui](https://mui.com/) : Material UI (MUI) is a React component library.

## Getting Started
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

## Installation
* Install Next.js
  ```sh
  npx create-next-app@latest
  ```
* Install NextAuth
  ```sh
  npm install next-auth
  ```
* Install MUI
  ```sh
  npm install @mui/material @emotion/react @emotion/styled
  ```
* Set up environment variables by creating a .env.local file and filling in the required keys:
  ```sh
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET=FWDEGGTRREIUBURIE-REJGU=454B
  NEXT_PUBLIC_BASE_URL="https://dummyjson.com/auth/login"
  # GitHub Provider 
  GITHUB_ID=
  GITHUB_SECRET=

  # Twitter Provider
  TWITTER_CLIENT_ID=
  TWITTER_CLIENT_SECRET=

  # Google Provider
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  ```
## Usage
1. Run the development server:
   ```sh
    npm run dev
   ```
2. Open your browser and navigate to:
   ```sh
    http://localhost:3000
   ```
3.You can now log in using the custom form or any of the supported OAuth providers.

## API Endpoints
- /api/auth/login – Authenticates users via the credentials API.
- /api/auth/session – Manages the user session using NextAuth.
