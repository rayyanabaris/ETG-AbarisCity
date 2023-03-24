const rss_feeds = require("../models/rss-feedModel");
const asyncHandler = require("express-async-handler");

const getrss_feedList = asyncHandler(async (req, res) => {
  try {
    const allrss_feed = await rss_feed.find();
    res.json(allrss_feed);
  } catch (error) {
    throw new Error(error);
  }
});

const getrss_feedById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getarss_feed = await rss_feeds.findById(id);
    res.json(getarss_feed);
  } catch (error) {
    throw new Error(error);
  }
});

const createrss_feed = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const rss_feed = await rss_feeds.create(req.body);
    res.json(rss_feed);
  } catch (error) {
    throw new Error(error);
  }
});
const updaterss_feed = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedrss_feed = await rss_feeds.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedrss_feed);
  } catch (error) {
    throw new Error(error);
  }
});
const deleterss_feed = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedrss_feed = await rss_feeds.findByIdAndDelete(id);
    res.json(deletedrss_feed);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchrss_feed = asyncHandler(async (req, res) => {
  try {
    const getSearchedrss_feed = await rss_feeds.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedrss_feed);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getrss_feedList,
  getrss_feedById,
  getSearchrss_feed,
  createrss_feed,
  updaterss_feed,
  deleterss_feed,
};
