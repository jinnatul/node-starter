const SendMessage = (res, message) => {
  res.status(200).json({
    status: 'ok',
    message,
  });
};

export default SendMessage;
