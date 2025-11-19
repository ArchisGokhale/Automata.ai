# Vercel Deployment (Frontend Only)

This project is set up for static deployment on Vercel.

## Steps

1. **Set Project Root:**
   - In Vercel, set the project root to `client`.
2. **Build Command:**
   - `npm run build`
3. **Output Directory:**
   - `dist`
4. **Do NOT deploy the custom Express server.**
   - Only the static frontend is deployed.

## Local Build
```sh
cd client
npm install
npm run build
```

## Notes
- If you need backend APIs, use Vercel serverless functions in the `/api` directory.
- Remove or ignore all custom server code for Vercel deployment.
