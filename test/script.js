const livepeer = require('livepeer-api');

const apiKey = '<api-key-goes-here>';
const getData = async () => {
    const obj = await livepeer.startStream(apiKey);
    
    console.log(obj);
}

const getStream = async () => {
    const obj = await livepeer.getStreamUrl(data, apiKey);
    
    console.log(obj);
}

