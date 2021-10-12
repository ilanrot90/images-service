const request = require("./api.utils");
const Info = require("../models/Info.model");
const mongo = require("../db");
const { url } = require("../config/db.config");

const seedDB = async () => {
  try {
    await mongo(url);
    const { data } = await request({
      url: "/small",
    });
    for await (let v of data) {
      await Info.create(v);
    }
    const total = await Info.countDocuments();
    console.log(`total new values - (${total})`);
  } catch (e) {
    console.error(e);
  }
};
seedDB();
