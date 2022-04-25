const AWS = require("aws-sdk");
const { people } = require("../swapi-api/people");

const uploadPeople = async (event) => {

    return {
        status: 200,
        body: {
            people,
        },
    };
};
uploadPeople()
module.exports = {
    uploadPeople,
};

/*
const uploadPeople = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const peoples = swapi.promise();

    await dynamodb
        .put({
            TableName: "PeopleTable",
            Item: peoples,
        })
        .promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "people uploaded",
        }),
    };

}; 


module.exports = {
    uploadPeople: middy(uploadPeople).use(httpJSONBodyParser()),
};
*/

