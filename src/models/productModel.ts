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
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        minLength:[0,"the price cant be negative"],
        required:true
    },
    category:{
        type:String,
        enum:{
            values:["boys","girls","children"],
            message:`pass in the required values`
        }   
    },
    
    feature:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:new Date().getDate()
    },
    updatedAt:{
        type:Date,
        default:new Date().getDate()
    },
    description:{
        type:String,
        minlength:[20,"there atleast needs to minimum of 20 characters"]
    },
    brand:{
        types:String,
        enum:{
            values:["nike","adidas","reebok","puma"]
        }
    }

})


export default mongoose.model<Prod>("products",ProductSchema)