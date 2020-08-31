# stream-pipeline
Promisify NodeJs stream pipeline function

## Installation
```sh
npm install @akumzy/stream-pipeline
# or 
yarn add @akumzy/stream-pipeline
```

# Usage
```js
const pipeline = require('@akumzy/stream-pipeline')

....
// Using async await
await pipeline(readableStream,writableStreamOrDeplux)

....
// Using Promise
pipeline(readableStream,writableStreamOrDeplux)
  .then(()=>{
   // Done
  })
  .catch(error=>{
    // Oops!
  })

```
