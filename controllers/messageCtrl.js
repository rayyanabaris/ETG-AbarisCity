const Messages = require("../models/messageModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const getMessageList = asyncHandler(async (req, res) => {
  try {
    const allMessage = await Messages.find();
    res.json(allMessage);
  } catch (error) {
    throw new Error(error);
  }
});

const getMessageById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaMessage = await Messages.findById(id);
    res.json(getaMessage);
  } catch (error) {
    throw new Error(error);
  }
});

const createMessage = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Message = await Messages.create(req.body);
    res.json(Message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateMessage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedMessage = await Messages.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedMessage);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteMessage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedMessage = await Messages.findByIdAndDelete(id);
    res.json(deletedMessage);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchMessage = asyncHandler(async (req, res) => {
  try {
    const getSearchedMessage = await Messages.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedMessage);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getMessageList,
  getMessageById,
  getSearchMessage,
  createMessage,
  updateMessage,
  deleteMessage,
};
