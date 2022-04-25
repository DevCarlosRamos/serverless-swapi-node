# Rest api serverless with Node
###### En este proyecto se implemento:

- Node.js v16  en desarrollo y v12 en producción
- Serverless v2.68.0
- Lambda
- Dynamodb

###### Dependencias de node:
-     "@middy/core": "^2.5.3",
-     "@middy/http-json-body-parser": "^2.5.3",
-     "aws-sdk": "^2.1044.0",
-     "node-fetch": "^2.6.7",
-     "uuid": "^8.3.2"

###### Link de proyecto desplegado en aws:
[click para ver el proyecto](http://https://evkbmh6li5.execute-api.sa-east-1.amazonaws.com/personas "Ver personas")

------------


#### Pasos para desplegarlo:
- Clonar el respositorio:
`git clone https://github.com/DevCarlosRamos/serverless-swapi-node.git`

- Instalar dependencias:
`npm install`

- Instalar el serverless:
`npm install -g serverless`

- comentar iamRoleStatements en el archivo serverless.yml para que no cause conflictos:
```
#  iamRoleStatements:
#    - Effect: Allow
#      Action:
#        - dynamodb:*
#      Resource:
#        - arn:aws:dynamodb:sa-east-1:783895869090:table/PeopleTable
```
- Dar deploy:
`sls deploy --verbose`

-Una ves creado su tabla de base de datos en descomentar y agregar el link:
```
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:*
      Resource:
        - arn:aws:dynamodb:sa-east-1:783895869090:table/PeopleTable
```
##Uso de la api
#### - Crear personaje 
POST:https://evkbmh6li5.execute-api.sa-east-1.amazonaws.com/personas
Enviar un json ejemplo:
```
{
    "nombre":"personaje1",
    "altura":0,
    "peso":0, 
    "color_de_pelo":"personaje1",
    "color_de_piel":"personaje1", 
    "color_de_ojos":"personaje1", 
    "nacimiento":"personaje1",
    "genero":"personaje1", 
    "mundo_natal":"personaje1", 
    "pelicula":"personaje1", 
    "especies":"personaje1",
    "vehiculo":"personaje1", 
    "naves":"personaje1", 
    "link":"personaje1"
}
```

#### - Mostrar todos los personajes
GET:https://evkbmh6li5.execute-api.sa-east-1.amazonaws.com/personas

#### - Mostrar solo un personaje
agregar un id valido al final del link ejemplo:
GET:https://evkbmh6li5.execute-api.sa-east-1.amazonaws.com/personas/f00579b8-8115-438f-8191-725f446de6f9

#### - Actualizar personaje
PUT:https://evkbmh6li5.execute-api.sa-east-1.amazonaws.com/personas/f00579b8-8115-438f-8191-725f446de6f9
enviar un json con este formato:
```
{
    "nombre":"update1",
    "altura":0,
    "peso":0, 
    "color_de_pelo":"update1",
    "color_de_piel":"update1", 
    "color_de_ojos":"update1", 
    "nacimiento":"update1",
    "genero":"update1", 
    "mundo_natal":"update1", 
    "pelicula":"update1", 
    "especies":"update1",
    "vehiculo":"update1", 
    "naves":"update1", 
    "link":"update1"
}
```

#### - Eliminar personaje- Eliminar personaje
eliminar personaje mediante su id
DELETE:https://evkbmh6li5.execute-api.sa-east-1.amazonaws.com/personas/f00579b8-8115-438f-8191-725f446de6f9

### integración con swapi
##### llamado de la api:
```
const people = fetch("https://swapi.py4e.com/api/people")
    .then((res) => {
        return res.json()
    })
```
##### conversion de nombre de ingles a español:
```
 .then((people) => {

        const data = people.results;
        const id = v4();

        const People = data.map(item => {
            return {
                id,
                nombre: item.name,
                altura: item.height,
                peso: item.mass,
                color_de_pelo: item.hair_color,
                color_de_piel: item.skin_color,
                color_de_ojos: item.eye_color,
                nacimiento: item.birth_year,
                genero: item.gender,
                mundo_natal: item.homeworld,
                pelicula: item.films,
                especies: item.species,
                vehiculo: item.vehicles,
                naves: item.starships,
                creado: item.created,
                editado: item.edited,
                link: item.url,
            }
        });
        console.log(People);
        return People;
    });
```
###### resultado:
[![resultado](google "resultado")](https://drive.google.com/file/d/16pZOfhOIoXLNCOlXiqcqnYn2SR30OSR5/view?usp=sharing "resultado")

para ver en consola:
`node ./swapi-api/people.js`

