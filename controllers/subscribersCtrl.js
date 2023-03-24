const Subscribers = require("../models/subscribersModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const getSubscriberList = asyncHandler(async (req, res) => {
  try {
    const allSubscriber = await Subscriber.find();
    res.json(allSubscriber);
  } catch (error) {
    throw new Error(error);
  }
});

const getSubscriberById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaSubscriber = await Subscribers.findById(id);
    res.json(getaSubscriber);
  } catch (error) {
    throw new Error(error);
  }
});

const createSubscriber = asyncHandler(async (req, res) => {
  try {
    if (req.body.email) {
      req.body.slug = slugify(req.body.email);
    }
    const Subscriber = await Subscribers.create(req.body);
    res.json(Subscriber);
  } catch (error) {
    throw new Error(error);
  }
});
const updateSubscriber = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedSubscriber = await Subscribers.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedSubscriber);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteSubscriber = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedSubscriber = await Subscribers.findByIdAndDelete(id);
    res.json(deletedSubscriber);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchSubscriber = asyncHandler(async (req, res) => {
  try {
    const getSearchedSubscriber = await Subscribers.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedSubscriber);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getSubscriberList,
  getSubscriberById,
  getSearchSubscriber,
  createSubscriber,
  updateSubscriber,
  deleteSubscriber,
};
