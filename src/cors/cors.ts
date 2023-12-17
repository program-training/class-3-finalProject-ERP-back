// import cors, { CorsOptions } from "cors";

// const allowedOrigins = [
//   "localhost",
//   "0.0.0.0",
// ];

// const corsOptions: CorsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// export const corsOrigin = cors(corsOptions);

import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: true,
};

export const corsOrigin = cors(corsOptions);
