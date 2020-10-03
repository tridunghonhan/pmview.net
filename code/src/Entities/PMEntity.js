module.exports = {
  create: ()=>{
    return {
      size:2.5,
      unit:"ug/m3",
      value:0,
      timestamp:Date.now(),
      location: {lat:0.0,long:0.0,alt:0.0}
    };
  },
  schema: {
    "$id": "https://pmview.net/schemas/ParticularMatter",
    type: "object",
    title: "ParticularMatter",
    description:"Core entity of application Measure and Visualize the Particular Matter",
    properties:{
      size: {
        type:'number',
        "description": "The size of PM",
        "enum":[1.0, 2.5, 10.0]
      },
      "unit":{
        "type":"string",
        "enum":["ug/m3"]
      },
      "value":{
        "type":"float",
        "minimum": 0,
        "maximum":1000 // normal range of pm2.5 is about 50 to 250ug/m3
      },
      "timestamp":{
        "type":"interger",
        "description": "when the Patticular Matter is measured in Unix timestamp(date +%s) format",
        "min":1601713784, // date when writing this line: Sat Oct  3 15:31:01 +07 2020
        "max":4102444800  //01/01/2100 @ 12:00am (UTC)
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
    },
    "required": ["size", "unit","value","timestamp","location"]
  }
}
