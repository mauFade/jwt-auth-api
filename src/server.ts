import { app } from "./app";

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.info(`API running on port: ${PORT}`);
});
