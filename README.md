# livepeer-api npm package

## Description
A npm package to simplify the connection to livepeer and streaming videos <br />

## Interface
``` javascript
const livepeer = require('livepeer-api');
livepeer.startStream(apiKey);
livepeer.getStreamUrl(data, apiKey);

```

## start a stream
@param {string} apiKey - your api key
``` javascript
const livepeer = require('livepeer-api');
const apiKey = '<your-api-key>';
const getData = async () => {
    const obj = await livepeer.startStream(apiKey);
    
    console.log(obj);
    // set state here using a react hook
}
```

## get the stream url
@param {object} data - the data returned from the startStream call
@param {string} apiKey - your api key
``` javascript
const livepeer = require('livepeer-api');
const getStream = async () => {
    const obj = await livepeer.getStreamUrl(data, apiKey);
    
    console.log(obj);
    // set state here using a react hook
}
```
