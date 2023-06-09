const router = require("express").Router();
const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const PagesRoute = require("./routes/pagesRoute");
const PostsRoute = require("./routes/postRoute");
const CategoriesRoute = require("./routes/categoriesRoute");
const Rss_feedRoute = require("./routes/rss-feedRoute");
const WidgetsRoute = require("./routes/widgetsRoute");
const PollsRoute = require("./routes/pollsRoute");
const GalleryRoute = require("./routes/galleryRoute");
const MessageRoute = require("./routes/messageRoute");
const CommentsRoute = require("./routes/commentsRoute");
const SubscriberRoute = require("./routes/subscribersRoute");
const AdSpaceRoute = require("./routes/adspacesRoute");
const PermissionRoute = require("./routes/permissionRoute");
const LanguagesRoute = require("./routes/languagesRoute");
const FontsRoute = require("./routes/fontsRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/pages", PagesRoute);
app.use("/api/post", PostsRoute);
app.use("/api/category", CategoriesRoute);
app.use("/api/rss-feed", Rss_feedRoute);
app.use("/api/widget", WidgetsRoute);
app.use("/api/polls", PollsRoute);
app.use("/api/gallery", GalleryRoute);
app.use("/api/message", MessageRoute);
app.use("/api/comment", CommentsRoute);
app.use("/api/subscriber", SubscriberRoute);
app.use("/api/ad-space", AdSpaceRoute);
app.use("/api/permission", PermissionRoute);
app.use("/api/language", LanguagesRoute);
app.use("/api/font", FontsRoute);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT http://localhost:${PORT}`);
});
module.exports = router;