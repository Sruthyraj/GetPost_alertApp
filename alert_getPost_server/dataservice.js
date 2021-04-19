const { List } = require("./db");

const getPost = (items) => {
  return List.find({}).then((data) => {
    if (!data) {
      return {
        status: false,
        message: "List is empty",
        statusCode: 422,
      };
    } else {
      return {
        status: true,
        statusCode: 200,
        message: "Registration successful",
        listitem: data,
      };
    }
  });
};

const getSave = (item) => {
  let newlist = new List({
    item,
  });
  return newlist.save().then((data) => {
    if (data) {
      return {
        status: true,
        statusCode: 200,
        message: "Registration successful",
        listitem: data,
      };
    }
  });
};

const getUpdate = (req) => {
  return List.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(
    (data) => {
      if (data) {
        return {
          status: true,
          statusCode: 200,
          message: "Registration successful",
          listitem: data,
        };
      }
    }
  );
};

const getDelete = (id) => {
  return List.findOneAndRemove({ _id: id }).then((data) => {
    return {
      status: true,
      statusCode: 200,
      message: "Registration successful",
      listitem: data,
    };
  });
};

module.exports = {
  getPost,
  getSave,
  getUpdate,
  getDelete,
};
