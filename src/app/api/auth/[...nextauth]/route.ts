// import { config } from 'dotenv';
// import { resolve } from 'path';
// import NextAuth from 'next-auth/next';
// import { options } from './options';

// // Load environment variables from .env file in the src directory
// config({ path: resolve(__dirname, '../../../../../.env') });

// const handler = NextAuth({
//   ...options,
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth/next";
import { options } from "./options";

const handler = NextAuth(options);

export { handler as GET, handler as POST };