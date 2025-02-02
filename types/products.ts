export interface Products{
    _id: string;
    _TYPE:"product";
    title: string;
     description: string;
     productimage?: {
        asset:{
            _ref: string;
            _type:"image"
        }
     };
    
     price: number;
    
      tag: string;
      discountPercentage: number;
    isNew: boolean;
    slug:{
        _type:"slug"
        current: string;
    } ;
    inventory:number;

}
