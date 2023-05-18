import CardMedia from "@mui/material/CardMedia";
export default function Cart(props: any) {
  const { data } = props;
  return (
    <div className="cart">
      <div className="product row m-0">
        <div className="col-md-6">
          <div className="photo-container">
            <div className="photo-main d-flex justify-content-center align-items-center">
              <CardMedia
                component="img"
                height="400"
                image={data.thumbnail}
                alt="Huawei P30"
              />
            </div>
            <div className="photo-album">
              <ul>
                {data?.images.map((x: any, index: number) => (
                  <li className="list-style-none">
                    <img src={x} alt={data.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="product__info  px-2 col-md-6">
          <div className="title">
            <h1>{data.title}</h1>
            <span>Category:{data.category} </span>
          </div>
          <div className="price">
            R$ <span>{data.price}</span>
          </div>

          <div className="description">
            <h3>BENEFITS</h3>
            <p className="mx-2">{data.description}</p>
            <ul>
              <li>Rating: {data.rating}</li>
              <li>Stock: {data.stock}</li>
              <li>Brand: {data.brand}</li>
              <li>Category: {data.category}</li>
            </ul>
          </div>
          <button className="buy--btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
