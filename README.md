# credsdefault-search
A web search panel for default credentials that includes an API with a comprehensive dataset. The dataset contains information on services, vendors, systems, IoT devices, routers, and more.

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

## Data collection process overview
1. Direction and Planning
2. Collection and Compilation
3. Processing
4. Analysis and Review
5. Dissemination and Sharing
6. Feedback and Continuous Improvement

### Data is collected from many sources. 
Sources include PDF files, GitHub repositories, CSV files, ZIP files, websites. The collector is gathering intel in the internet.
The data is being serialized and saved in .json form in case the collection stops.

### The collected data is processed.
Each collector has it's own processor. Processors process Intel collected by the collectors and save the extracted Credentials in order to provide actionable data.

### After processing, postprocessing occurs.
The postprocessors load processed credentials, sort them, and remove duplicates.

### Result is saved in output.json.
The result is saved in an output JSON (`output.json`) file.

### The result is being hosted in releases
The result file is saved as a `Release` in repository to be used by other tools.
