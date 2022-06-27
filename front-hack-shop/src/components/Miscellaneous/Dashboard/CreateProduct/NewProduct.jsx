import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <div className="newProductTitle">
        <h1>Agregar Producto</h1>
      </div>
      <form action="" className="newProductForm">
        <div className="newProductItem">
          <label htmlFor="productName">Nombre</label>
          <input type="text" id="productName" placeholder="productName" />
        </div>
        <div className="newProductItem">
          <label htmlFor="productDescription">Descripcion</label>
          <input
            type="text"
            id="productDescription"
            placeholder="productDescription"
          />
        </div>
        <div className="newProductItem">
          <label htmlFor="newProductImage">Link Imagen</label>
          <input
            type="text"
            id="newProductImage"
            placeholder="linkcualquiera"
          />
        </div>
        <div className="newProductItem">
          <label htmlFor="newProductPrice">Precio en USD</label>
          <input type="number" id="newProductPrice" placeholder="55555" />
        </div>
        <div className="newProductItem">
          <label htmlFor="productStock">Stock Disponible</label>
          <input type="number" id="productStock" placeholder="65" />
        </div>
        <button type="submit" className="newProductButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
