This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Problem

I used `signInWithEmailAndPassword` from `firebase/auth` to log in. The `print current user info` button can print the user info in the console. 

The rule I used is:

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /test/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

I think it means if I logged in, the request will be allowed.

But the request always return: `@firebase/firestore: Firestore (10.13.1): GrpcConnection RPC 'Write' stream 0x8118b5fc error. Code: 7 Message: 7 PERMISSION_DENIED: Missing or insufficient permissions.`

If I changed it to `if request.auth == null`, it works. 

Can you help me fix this? I don't know the problem is on my code or the firebase settings. Thank you!
