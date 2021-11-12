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

const startStream = (apiKey) => {
    const livepeerObj = new Livepeer(apiKey);
    livepeerObj.Stream.create(content).then((res) => {
        console.log(res);
        return res;
    });
};

function connectToLivepeer(data, apiKey) {

    const getStreamUrl = async () => {
        const url = `https://livepeer.com/api/session?limit=20&parentId=${data.id}`;

        const listOfAllStreams = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        if (listOfAllStreams.data.length === 0) {
            alert("No stream detected");
            return;
        }
        
        console.log(listOfAllStreams);
        let streamUrl = listOfAllStreams.data[0].mp4Url;

        if (streamUrl === "") alert("stream is currently processing");
    };
}


module.exports = {startStream, connectToLivepeer};