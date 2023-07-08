import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadResponseCallback,
} from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadFileCloud = (
  path: string,
  folderName: string
): Promise<UploadApiResponse> => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    const callback: UploadResponseCallback = (err, result) => {
      if (err) {
        reject(err);
      } else {
        if (result) {
          resolve(result);
        } else {
          reject(new Error("Upload result is undefined."));
        }
      }
    };

    cloudinary.uploader.upload(path, { folder: folderName }, callback);
  });
};

export default uploadFileCloud;
