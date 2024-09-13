import Products from "../models/productModel"


export const getProduct = async (req,res,next)=>{
    const{name,category,brand,feature,sort,select}=req.query
    
    interface searchType{
        $regex:string,
        $options:string
    }

    interface Search{
        name?:searchType,
        category?:string,
        brand?:string,
        feature?:boolean
    }
    const search:Search = {}
    console.log(req.query)
    if(name){
        search.name={$regex:name,$options:"i"}
    }

    if(category){
        search.category=category
    }

    if(brand){
        search.brand=brand
    }

    if(feature){
        search.feature=feature?true:false
    }

    const products = Products.find(search)

    if(sort){
        const sorted = sort.split(",").join(" ")
        products.sort(sorted)
    }

    if(select){
        const selected = select.split(",").join(" ")
        products.select(selected)
    }

    const page = Number(req.query.page) || 1
    const limit = req.query.limit || 3
    const skip = (page - 1) * 3

    products.skip(skip).limit(limit)

    const results = await products
    res.status(200).json({data:results,numHits:results.length})
}

export const postProducts =async (req,res)=>{

    console.log(req.body)

    const createdProduct = await Products.create(req.body)

    res.status(201).json({data:createdProduct})
}