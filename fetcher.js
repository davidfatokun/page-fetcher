const fs = require("fs");

let args = process.argv;
args = args.slice(2);
let url = args[0];
let filePath = args[1];
filePath = filePath.split('/')[1];
url += filePath;

const request = require('request');
request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    fs.writeFile("./data/response.txt", JSON.stringify(body), (error) => {
        if (error) throw error;
        console.log('The file has been downloaded and saved!');

        fs.stat("./data/response.txt", (error, stats) => {
            if (error) throw error;
            console.log('Downloaded and saved ' + stats.size + ' bytes to ' +  args[1]);
        });
    });

});


