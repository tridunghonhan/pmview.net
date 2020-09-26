module.exports = {
  create: ()=>{
    return {};
  },
  schema: {
    "$id": "https://pmview.net/schemas/ParticularMatter",
    "type": "object",
    "title": "ParticularMatter",
    "description":"Core entity of application Measure and Visualize the Particular Matter",
    "properties":{
      "size": {
        "type":"number",
        "description": "The size of PM",
        "enum":[1.0, 2.5, 10.0]
      },
      "unit":{
        "type":"string",
        "enum":["ug/m3"]
      },
      "value":{
        "type":"float"
      },
      "timestamp":{
        "type":"interger",
        "description": "when the Patticular Matter is measured in Unix timestamp(date +%s) format"
      },
      "location":{
        "type":"object",
        "description": "where the PM is measured",
        "properites":{
          "lat":{ "type": "float" },
          "long":{ "type": "float" },
          "alt":{ "type": "float" }
        }
      }
    }
  }
}
