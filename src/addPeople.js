const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");

const addPeople = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { nombre, altura, peso, color_de_pelo,
    color_de_piel, color_de_ojos, nacimiento,
    genero, mundo_natal, pelicula, especies,
    vehiculo, naves, link, } = event.body;

  const creadoOb = new Date();
  const creado = JSON.stringify(creadoOb);
  const id = v4();

  const newPeople = {
    id,
    nombre, altura, peso, color_de_pelo,
    color_de_piel, color_de_ojos, nacimiento,
    genero, mundo_natal, pelicula, especies,
    vehiculo, naves, creado, editado: creado, link,
  };

  await dynamodb
    .put({
      TableName: "PeopleTable",
      Item: newPeople,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newPeople),
  };
};

module.exports = {
  addPeople: middy(addPeople).use(httpJSONBodyParser()),
};
