import { timeStamp } from "console"
import mongoose,{Document,Schema} from "mongoose"


interface Prod extends Document{
    name:string,
    category:string,
    price:number,
    brand:string,
    description:string,
    feature:boolean,
    createdAt:Date,
    updatedAt:Date,
}

const ProductSchema = new Schema<Prod>({
    name:String,
    price:Number,
    category:{
        type:String,
        enum:{
            values:["boys","girls","children"],
            message:"not supported",
        }   
    },
    
    feature:{
        type:Boolean,
        default:false
    },
    
   
    description:{
        type:String,
      
    },
    brand:{
        type:String,
        enum:{
            values:["nike","adidas","reebok","puma"],
            message:"not supported"
        }
    }

},{timestamps:true})


export default mongoose.model<Prod>("products",ProductSchema)