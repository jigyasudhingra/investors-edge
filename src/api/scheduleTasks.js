const cron = require("node-cron");
const axios = require("axios");

// Define the task to be executed
const task = async () => {
  try {
    // Make an API request or perform any task here
    const response = await axios.get("https://api.example.com/task");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Schedule the task to run every day at 9 AM
cron.schedule("0 9 * * *", task);
