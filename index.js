const Livepeer = require('livepeer-nodejs');
const axios = require('axios');

const content = {
    "name": "test_stream", 
    "profiles": [
        {
            "name": "720p",
            "bitrate": 2000000,
            "fps": 30,
            "width": 1280,
            "height": 720
        },
        {
            "name": "480p",
            "bitrate": 1000000,
            "fps": 30,
            "width": 854,
            "height": 480
        },
        {
            "name": "360p",
            "bitrate": 500000,
            "fps": 30,
            "width": 640,
            "height": 360
        },
    ],
    "record": true
};

// @param: {apiKey} string - livepeer api key
const startStream = async (apiKey) => {
    const livepeerObj = new Livepeer(apiKey);
    const data = await livepeerObj.Stream.create(content);

    return data;
};

// @param: {data} object - data to be sent to the server
// @param: {apiKey} string - livepeer api key
const getStreamUrl = async (data, apiKey) => {
    const url = `https://livepeer.com/api/session?limit=20&parentId=${data.id}`;

    const listOfAllStreams = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
    });

    if (listOfAllStreams.data.length === 0) {
        console.log('no streams detected');

        return undefined;
    }
    
    let streamUrl = listOfAllStreams.data[0].mp4Url;

    if (streamUrl === "") {
        console.log("stream is currently processing");

        return undefined;
    }

    return streamUrl;
};

module.exports = {startStream, getStreamUrl};
