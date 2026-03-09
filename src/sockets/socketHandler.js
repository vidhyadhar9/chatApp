const Message = require("../models/message");

const socketHandler = (io) => {

  io.on("connection", (socket) => {

    console.log("User connected", socket.id);

    socket.on("join_chat", (conversationId) => {
      socket.join(conversationId);
    });

    socket.on("send_message", async (data) => {

      const message = await Message.create({
        conversationId: data.conversationId,
        senderId: data.senderId,
        content: data.message
      });

      io.to(data.conversationId).emit("receive_message", message);

    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });

  });

};

module.exports = socketHandler;