## Process overview
### The collectors are collecting data from many sources. 
Sources include PDF files, GitHub repositories, CSV files, ZIP files, websites. The collector is gathering intel.
The data is being serialized and saved in .json form in case the collection stops.

### The data is going to be processed later by processors.
Each collector has it's own processor. Processors process Intel collected by the collectors and save the extracted Credentials in order to provide actionable data.

### After processing, postprocessing occurs.
The postprocessors load processed credentials, sort them, and remove duplicates.

### Result is saved in output.json.
The result is saved in an output JSON (`output.json`) file.

### The result is being hosted in releases
The result file is saved as a `Release` in repository to be used by other tools.
