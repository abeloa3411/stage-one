const express = require("express");
const app = express();
const port = 3000;

function getCurrentDay() {
  const currentDate = new Date();

  const dayOfWeek = currentDate.getDay();

  daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDayOfWeek = daysOfWeek[dayOfWeek];

  return currentDayOfWeek;
}

app.get("/api ", (req, res) => {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    return res.status(400).json({
      error: "Both slack_name and track are required query parameters.",
    });
  }

  const user = {
    slack_name,
    current_day: getCurrentDay(),
    utc_time: new Date().toISOString(),
    track,
    github_file_url:
      "https://github.com/abeloa3411/stage-one.main/blob/index.js",
    github_repo_url: "https://github.com/abeloa3411/stage-one",
    status_code: 200,
  };

  res.json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
