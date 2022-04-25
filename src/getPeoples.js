const AWS = require("aws-sdk");

const getPeoples = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "PeopleTable" }).promise();

  const peoples = result.Items;

  return {
    status: 200,
    body: {
      peoples,
    },
  };
};

module.exports = {
  getPeoples,
};
