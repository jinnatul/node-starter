import SendData from "../utils/responses/SendData";

export const SignUp = async (req, res, next) => {
  try {
    SendData(res, "ok");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
