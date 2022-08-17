import speakeasy from "speakeasy";
import QRCode from "qrcode";
import Cloudinary from "../config/Cloudinary";

const CreateMFA = async () => {
  const { base32, otpauth_url } = speakeasy.generateSecret();

  const Base64Data = await QRCode.toDataURL(otpauth_url);
  const CloudData = await Cloudinary.uploader.upload(Base64Data);

  return {
    mfa_secret: base32,
    mfa_qr: CloudData.url,
  };
};

export default CreateMFA;
