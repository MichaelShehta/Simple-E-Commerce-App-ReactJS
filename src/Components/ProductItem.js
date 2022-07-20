const Product = (props) => {
  const {name , id , price, count} = props.products;
    return (
<div className=" m-2 p-2 container row" style= {{backgroundColor:"#b6fbff"}} >
    <span className="fw-bold col-2 bg-primary" style = {{color:"white" , display:"flex", justifyContent:"center",alignItems:"center"}}>{name}</span>
    <span className="col-4 text-center">{price}$</span>
    <div className="btn btn-primary col-1 m-2" onClick={()=>props.handelIncrement(id)} >+</div>
    <span className="col-2  text-center p-2"> {count}</span>
    <div className="btn btn-primary col-1 m-2" onClick={()=>props.handelDecrement(id)} >-</div>
    <div className="btn btn-danger btn-sm col-1 m-2" onClick={()=>props.handelDelete(id)}>
    <i className="fa-solid fa-trash-can"></i>
    </div>
</div>
    );
}

export default Product;