// Json parser middleware
function jsonParser(req, res, next) {
  // Ignore because request wasn't json
  if (req.headers["content-type"] !== "application/json") {
    next();
    return;
  }

  // Parse json
  let chunks;

  req.on("data", (chunk) => {
    if (chunks) chunks = Buffer.concat([chunks, chunk]);
    chunks = chunk;
  });

  req.on("end", () => {
    if (!chunks) {
      next();
      return;
    }

    const str = chunks.toString();
    try {
      const json = JSON.parse(str);
      // Assign json to request body
      req.body = json;
      next();
    } catch {
      res.status(400).end("JSON invalid");
    }
  });
}

module.exports = jsonParser;
