const AWS = require("aws-sdk");

const getPeople = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: "PeopleTable",
      Key: { id },
    })
    .promise();

  const people = result.Item;

  return {
    status: 200,
    body: people,
  };
};

module.exports = {
  getPeople,
};
