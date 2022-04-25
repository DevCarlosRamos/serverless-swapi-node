const AWS = require("aws-sdk");

const deletePeople = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  await dynamodb
    .delete({
      TableName: "PeopleTable",
      Key: {
        id,
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: 'Deleted People'
    }
  };
};

module.exports = {
  deletePeople,
};
