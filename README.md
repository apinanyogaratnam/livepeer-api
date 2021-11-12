# livepeer-api npm package

## start a stream
``` javascript
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
const getStream = async () => {
    const obj = await livepeer.getStreamUrl(data, apiKey);
    
    console.log(obj);
    // set state here using a react hook
}
```
