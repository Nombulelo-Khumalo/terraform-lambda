// lambda.js
exports.test = async (event) => {
  console.log("Event:", event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};
