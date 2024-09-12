# NEXTAUTH LOGIN WITH API
**NextAuth:**
NextAuth.js is an open-source authentication solution for Next.js applications. It's designed to support Next.js and Serverless, and can be used with or without a database.NextAuth.js allows users to sign in using their existing logins from other providers. NextAuth.js automatically creates simple authentication pages for sign in, sign out, email verification, and error messages.

## INTRODUCTION:
- NextAuth.js provides flexible authentication support for Next.js applications. It allows developers to add various authentication methods such as OAuth providers (Google, GitHub, Twitter, etc.), email/password-based credentials, and custom API authentication.
- In a custom login form using an API, we handle authentication by capturing user input (like email/username and password) and sending these credentials to a backend API for validation. Once validated, the API returns tokens or user information, which is managed by NextAuth to establish a session.
- NextAuth allows for a seamless integration of external APIs, making it ideal for custom authentication setups while providing robust session management and token handling.
- This setup provides developers the flexibility to authenticate users via APIs while utilizing the built-in benefits of NextAuth, such as session handling, JWT token management, and easy integration with OAuth providers.
- The process typically follows these steps:

1. Creating a custom login form to capture user credentials.
2. Sending the credentials to an external API for verification.
3. Handling the response, including access tokens, user information, and error handling.
4. Storing tokens and managing sessions using NextAuth’s callback functions.
5. Displaying user details on protected pages once authenticated.

## Built With
- [Next.js](https://nextjs.org/) : Next.js is a React framework.
- [NextAuth](https://next-auth.js.org/) : NextAuth.js is a complete open-source authentication solution for Next.js applications.
- [Mui](https://mui.com/) : Material UI (MUI) is a React component library.

## Getting Started
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.
## Prerequisites
This is an example of how to list things you need to use the software and how to install them.
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
