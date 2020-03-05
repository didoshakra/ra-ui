// pages/api/hello.ts //https://nextjs.org/blog/next-9#api-routes

console.log("***pages/api/hello.js");
export default function handle(req, res) {
  console.log("hello.js/req.body", req.body); // The request body
  console.log("hello.js/req.query", req.query); // The url querystring
  console.log("hello.js/req.cookies", req.cookies); // The passed cookies
  res.end("Роман");
}
