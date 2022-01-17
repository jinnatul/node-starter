const SendData = (res, data) => {
  res.status(200).json({
    status: 'ok',
    data,
  });
};

export default SendData;
