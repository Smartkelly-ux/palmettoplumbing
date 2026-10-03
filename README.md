# Palmetto Plumbing Co.

Commercial plumbing company website for South Florida.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Build for hosting

```sh
npm run build
```

The production website is generated in `dist/`. Deploy the contents of that
directory to any static web host that serves HTML, CSS, JavaScript, and image
files, including deployments from a subdirectory. No application server, API
key, or host-specific runtime is required.

For hosts that use a build pipeline, use `npm run build` as the build command
and `dist` as the publish directory. Configure a fallback to `/index.html` if
the host requires one for client-side routes.

The quote request form currently displays a local confirmation but does not
send submissions. Connect it to a form provider or backend before using it to
receive live inquiries.
