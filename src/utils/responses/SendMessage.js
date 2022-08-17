const SendMessage = (res, message, status) => {
  res.status(status ? status : 200).json({
    status: 'ok',
    message,
  });
};

export default SendMessage;
