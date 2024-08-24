# credsdefault-search
A web search panel for default credentials that includes an API with a comprehensive dataset. The dataset contains information on services, vendors, systems, OT and IoT devices, routers, and more.

## Features
- Infinite scroll
- Search bar that filters results based on your query in real-time.
- Can export filtered results to .csv report.

## Installation
```
npm install
npm run start
```

## Can I run it offline?
Yes.
- Download the latest output.json from Releases.
- Host it on localhost, for example using `python3 -m http.server` or [droppa](https://github.com/krystianbajno/droppa).
- Change the .env variable `DATASOURCE_ENDPOINT_URL` to point to the HTTP server running on localhost.
- Run `credsdefault-search` offline.
