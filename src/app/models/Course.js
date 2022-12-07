const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, required: true },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Course", Course);
