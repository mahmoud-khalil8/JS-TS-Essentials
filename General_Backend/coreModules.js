const os = require('os');
const fs = require('fs');

// Getting CPU information
const info = os.cpus();

// Self-invoking async function
(async () => {
    if (fs.existsSync('cpu.txt')) {
        // Using a readable stream to read the content of the file
        const readableStream = fs.createReadStream('cpu.txt');
        
        // Listening to 'data' event to get file content in chunks
        readableStream.on('data', (chunk) => {
            console.log(chunk.toString());
        });

        // Listening to 'end' event to know when the stream is completed
        readableStream.on('end', () => {
            console.log("Stream completed correctly");
        });
    } else {
        // Writing CPU info to the file if it doesn't exist
        await fs.promises.writeFile('cpu.txt', JSON.stringify(info, null, 2), 'utf-8');
        console.log("CPU information written to cpu.txt");
    }
})();

// Notes
(() => {
    // Code here
    console.log("Self-invoking function");
})(); // This is called a self-invoking function

/*streams are objects that enable the reading and writing of data in a
 continuous, efficient manner. They are an abstraction for working with
  streaming data, allowing you to handle data that is too large to be
   processed in one go. Instead of loading the entire dataset into memory,
 streams break the data into chunks and process it piece by piece */
 