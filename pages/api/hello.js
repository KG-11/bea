// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import Cors from "cors";
// import { runMiddleware } from "../../utils/apiUtils";

// const cors = Cors({
//   origin: false,
//   methods: ["POST"],
// });

// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }

export default async function handler(req, res) {
  // await runMiddleware(req, res, cors);
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["POST"],
  //   origin: false,
  // });

  res.status(200).json({ name: "John Doe" });
}
