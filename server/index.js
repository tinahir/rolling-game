import express from 'express';
import RollNumberModel from './shared/RollNumberModel';

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/rollnumbers", (req, res) => {
  const param = req.query.q;
  
  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }

  res.json(new RollNumberModel(3).toJson());

});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
