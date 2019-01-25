var initialState=[
    {
        id:1,
        name:'Iphone 7 plus',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Sản phẩm do apple sản xuất',
        price:500,
        inventory:10,
        rating:4
    },
    {
        id:2,
        name:'Samsung Galaxy s7',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Sản phẩm do Samsung sản xuất',
        price:400,
        inventory:15,
        rating:3

    },
    {
        id:3,
        name:'Oppo f1 s',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Sản phẩm do china sản xuất',
        price:450,
        inventory:5,
        rating:5

    }
];
//tạo reducer cho product
const products=(state=initialState,action)=>{
    switch(action.type){
        default:return [...state];
    }
}
export default products;