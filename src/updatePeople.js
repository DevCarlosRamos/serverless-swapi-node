const AWS = require("aws-sdk");

const updatePeople = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { nombre, altura, peso, color_de_pelo,
    color_de_piel, color_de_ojos, nacimiento,
    genero, mundo_natal, pelicula, especies,
    vehiculo, naves, link, } = JSON.parse(event.body);

  const editadoOb = new Date();
  const editado = JSON.stringify(editadoOb);

  await dynamodb
    .update({
      TableName: "PeopleTable",
      Key: { id },
      UpdateExpression: "set nombre = :nombre, altura = :altura, " +
        "peso = :peso, color_de_pelo = :color_de_pelo, " +
        "color_de_piel = :color_de_piel, color_de_ojos = :color_de_ojos, " +
        "nacimiento = :nacimiento, genero = :genero, " +
        "mundo_natal = :mundo_natal, pelicula = :pelicula, " +
        "especies = :especies, vehiculo = :vehiculo, " +
        "editado = :editado, naves = :naves, link = :link ",
      ExpressionAttributeValues: {
        ":nombre": nombre,
        ":altura": altura,
        ":peso": peso,
        ":color_de_pelo": color_de_pelo,
        ":color_de_piel": color_de_piel,
        ":color_de_ojos": color_de_ojos,
        ":nacimiento": nacimiento,
        ":genero": genero,
        ":mundo_natal": mundo_natal,
        ":pelicula": pelicula,
        ":especies": especies,
        ":vehiculo": vehiculo,
        ":editado": editado,
        ":naves": naves,
        ":link": link,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "people updated",
    }),
  };
};

module.exports = {
  updatePeople,
};
