const production = process.env.NODE_ENV === "production";

export const url = production
  ? process.env.API_URL_PROD
  : process.env.API_URL_DEV;

// export const uploadUrl =
//     production ? process.env.UPLOAD_URL_PROD
//     : process.env.UPLOAD_URL_DEV
