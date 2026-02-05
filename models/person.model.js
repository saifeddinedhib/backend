const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
    min: 0,
  },

  favoriteFoods: {
    type: [String],
    default: ["pizza"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  phone: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACUCAMAAADBJsndAAAAYFBMVEXb29v////29vYAAAD7+/vg4ODu7u7m5ubj4+Pz8/Pr6+vY2NjKysrCwsJ3d3eSkpKvr6/S0tKdnZ1QUFBnZ2ekpKRVVVUxMTEjIyM4ODg9PT1dXV0TExOJiYkeHh67u7uX1evNAAADsklEQVR4nO2byXbbMAxFxVkkLStO02ao0/7/X1aSJVlpapsDADo9vCvv/A7AB3CAmqZSqVQqlUqlUqlUKpVKpVKp/Jeo1jitrbVaO9Mq5UsL+oRvlNFcSnZGSq6Nau5La6u3Ejdirbkfpcr9W+Qs1anSAifUhVBulOo7WKlXY3mOaWGVLQ9QOcLbkjKDglk6pL6xwSpHbCGdasm5DdTLixh/lSk7FxjRAkL9KpMdHoNTL8ndNMt0mvFvKlgndUQXC8n9jvVP4TIHoaQ6F6f3otsJH6OT1vXqpPO7EP2P5yiZw1IhU+mN24//2Inn5xfxEKmTtWTNnrPXvWS7X+K9F29trE5JJXMolz9F71/E8dCJ91iZjBkamWNJ2ovjqxBvTP/q4nVKmuKk2eSggd9DYONlMqYpZKpxj7QbZR6HHxE1njigUzN/n3Qm5JwuoOP/PE5pF8ddqlD80mSYZA9i5vWQqBPf8nZenHNEmzSd6N1zcJHkUvIn8Wb8YdclZh7dScuWuB+LUgbYXV7P//Mg9FUdt8B2/LKL7/osmdj70HY5CKu4XecnkE8g6+Yo/OB+AdzKZHLlreAaKc88WzRmS/JxNyDX4Kg6Q6+9qs4wsm2+IlHj+VV0wuUdV+dX8TucTovqI8A6jykTsG/i9vfoS5qL4O6XFFRhwj54QBUmi6wTykjY5w4gI0nsAzzQAsW/YYJJPPo9g4epTAb/ggki8RRX36GPhNegePMAcBLJq5zPdxLRE1JuT6J65Myt9UTvMrmnD9yT5haVI1QSDgnlZJ4q6xPpnid54zqTeqCjHrpRaULpJ1mSvFRkMig+orbIjGV06rHPRBeJcz2x07eY8EXKSevmX/jg3BfL+YIJ2Y4WDeaCu5V8XnqadkZdXaZ3EcuFi3PpdzLsveKb1lm+ESslt6a9n+H5LUoZ45zWzo2fTZRWU6lUKpVElHHaWp7C+OVcS3LRYGz2vaLkGrdZqTZf5Aym1JsbzSikxhlQj/gmKhQL/8gZ/IFZHNBnUIRgngD9bi7rvvMWcIenoCNlOkC59y2uTKi7RrhRC0yhnkAmgFAPNmhxndw1iur0LZmuh5urukXOrQnN4jyRcyWe9NFOKumDbIDTdCEkd1D0Av8RnrjPJ/P6QuLsP9xsYihJVZTURCeSxlvow8lYQm0iapgfSRhrIizxZxK6Z4m0J+ybyIvSRLSRKDv7VmeskYhb5kp0pS/hdpawuysjM9rwcPPncUR2zkI2ii9MEEOeKVw0/B/QeS8zmjw0XgAAAABJRU5ErkJggg==",
  },
  role: {
    type: String,
    enum: ["CUSTOMER", "ADMIN"],
    default: "CUSTOMER",
  },
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
