import { model, Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title:{
            type:String,
            require:true,
            index:true
        },
        isComplete:{
            type:Boolean,
            default:false,
            index:true,
        }
    },
    {
        timestamps:true,
    }
)

export const TodoModel = model("TodoModel",todoSchema);