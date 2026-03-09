const Message = require("../models/message");

exports.getMessages = async (req, res) => {

  try {

    const messages = await Message.find({
      conversationId: req.params.conversationId
    });

    res.json(messages);

  } catch (error) {
    res.status(500).json(error);
  }
};