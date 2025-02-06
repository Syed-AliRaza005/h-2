export default {
            name:"order",
            type:"document",
            title:"Order",
            fields:[
                {
                    name:"firstName",
                    title:"First Name",
                    type:"string",
            },
            {
                name:"lastName",
                title:"Last Name",
                type:"string",
            },
            {
                name:"address",
                title:"Address",
                type:"string",
            },
            {
                name:"city",
                title:"City",
                type:"string",
            },
            {
                name:"zipCode",
                title:"Zip Code",
                type:"string",
            },
            {
                name:"phone",
                title:"Phone",
                type:"number",
            },
            {
                name:"email",
                title:"Email",
                type:"string",
            },
            {
                name:"cartItem",
                title:"Cart Item",
                type:"array",
                of:[{type:"reference",to:{type:"product",}}]
            },
            {
                name:"discount",
                title:"Discount",
                type:"number",
            },
            {
                name:"total",
                title:"Total Price",
                type:"number",
            },
            {
                name:"status",
                title:"Status",
                type:"string",
                options:{
                    list:[
                        {title:"pending",value :"pending"},
                        {title:"success",value:"success"},
                        {title:"dispatched",value:"dispatched"}
                    ],
                    Layout:"radio"
                },
                initialValue:"pending"
            }

        
        ]


}