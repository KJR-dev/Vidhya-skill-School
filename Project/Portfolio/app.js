import express from "express";
import web from "./routes/web.js";
import { join } from "path";
const app = express();
const port = process.env.PORT || '3000';

//setup static files likes css,js,images etc...
app.use(express.static(join(process.cwd(), "public")));

//setup ejs files
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", web);

app.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`);
});
