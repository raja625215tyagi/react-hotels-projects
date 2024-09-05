
import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const vedioSchema = new Schema({
    vedioFile: {
        Type: String, //cloudnary url
        required: true
    },
    thumbnail: {
        Type: String, //cloudnary url
        required: true
    },
    tittle: {
        Type: String,
        required: true
    },
    description: {
        Type: String,
        required: true
    },
    duration: {
        Type: String,
        required: true
    },
    views: {
        Type: number,
        default: 0,
    },
    isPublised: {
        Type: Boolean,
        default: true,
    },
    owner: {
        Type: Schema.type.ObjectId,
        ref: "User",
    },
},
    {
        timestamps: true
    }

)

vedioSchema.plugin(mongooseAggregatePaginate)
export const Vedio = mongoose.model("Vedio", vedioSchema)