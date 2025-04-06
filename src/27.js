// Node.js script to demonstrate using Promises
console.log("Starting a new promise chain...");

const promises = [
  // A promise that makes a request to an API endpoint
  axios.get("https://api.example.com/data")
    .then(response => {
      console.log(`Response from API: ${response.data}`);
    })
    .catch(error => {
      console.error(`Error making the API request: ${error}`);
    }),

  // Another promise that awaits a number until it becomes 10
  setTimeout(() => Math.random() * 10, 500),
  // A third promise that uses an asynchronous function with arguments and returns its results
  async () => {
    const result = await someAsyncFunctionWithArguments(3);
    console.log(`Result: ${result}`);
  }
];

// Wait for the promises to complete before starting the main code
Promise.all(promises).then(() => {
  // Main code that uses all of the promises and logs the results
  promises.forEach(function (promise) {
    try {
      promise.then(result => {
        console.log(`Result from ${promise}: ${result}`);
      });
    } catch (error) {
      console.error(`Error in ${promise}: ${error}`);
    }
  });

  // Wait for all promises to finish and then log the result
}).catch(error => {
  console.error("An error occurred: ", error);
});
