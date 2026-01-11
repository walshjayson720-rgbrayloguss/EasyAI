import express from "express";
import { route } from "./core/router.js";
import { runTextModel } from "./models/textModel.js";
import { runImageModel } from "./models/imageModel.js";

const app = express();
app.use(express.json());

app.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;
  const type = route(prompt);

  if (type === "image") {
    const image = await runImageModel(prompt);
    res.json({ type: "image", result: image });
  } else {
    const text = await runTextModel(prompt);
    res.json({ type: "text", result: text });
  }
});

app.listen(3000, () => {
  console.log("AI Engine running on port 3000");
});
