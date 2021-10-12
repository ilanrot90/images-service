const asyncHandler = require("../utils/async.utils");
const Info = require("../models/Info.model");

const getData = async (req, Model) => {
  let { page = "1", limit = "9" } = req.query;
  page = Number(page);
  limit = Number(limit);
  const total = await Model.countDocuments();

  const nextPage = total > page * limit ? page + 1 : null;
  const prevPage = 0 > (page - 1) * limit ? page - 1 : null;
  const skip = (page - 1) * limit;
  const data = await Info.find({}).skip(skip).limit(limit);

  return { nextPage, prevPage, data, success: true };
};

const getImages = asyncHandler(async (req, res, next) => {
  const response = await getData(req, Info);
  res.status(200).json(response);
});

module.exports = { getImages };
