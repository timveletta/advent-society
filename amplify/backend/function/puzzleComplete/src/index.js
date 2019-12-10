/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiAdventSocietyGraphQLAPIIdOutput = process.env.API_ADVENTSOCIETY_GRAPHQLAPIIDOUTPUT
var apiAdventSocietyGraphQLAPIEndpointOutput = process.env.API_ADVENTSOCIETY_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

let config = {
  region: process.env.REGION
};

if (typeof DocumentClient === "undefined") {
  var DocumentClient = new AWS.DynamoDB.DocumentClient(config);
}

const DB_TABLE = "Puzzle-e52ylquiebbbpa6zovyo75s7oy-prod";

exports.handler = function(event, context) {
  console.log(event.arguments.id);

  const params = {
    TableName: DB_TABLE,
    Key: {
      id: event.arguments.id
    },
    UpdateExpression: "set isComplete = :c",
    ExpressionAttributeValues: {
      ":c": true
    },
    ReturnValues: "ALL_NEW"
  };

  DocumentClient.update(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      context.done(null, data.Attributes); // SUCCESS with message
    }
  });
};
