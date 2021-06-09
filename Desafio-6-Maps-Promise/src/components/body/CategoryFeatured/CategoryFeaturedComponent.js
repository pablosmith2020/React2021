import Category1Img1 from "../../../img/shop/categories/category1/01.jpg";
import Category1Img2 from "../../../img/shop/categories/category1/02.jpg";
import Category1Img3 from "../../../img/shop/categories/category1/03.jpg";

import Category2Img1 from "../../../img/shop/categories/category2/01.jpg";
import Category2Img2 from "../../../img/shop/categories/category2/02.jpg";
import Category2Img3 from "../../../img/shop/categories/category2/03.jpg";

import Category3Img1 from "../../../img/shop/categories/category3/01.jpg";
import Category3Img2 from "../../../img/shop/categories/category3/02.jpg";
import Category3Img3 from "../../../img/shop/categories/category3/03.jpg";

const CategoryFeaturedComponent = ({ data }) => {
  const mySwitchFunctionHeaderImg = (param) => {
    switch (param) {
      case "1":
        return [
          <img
            id={data.category_id}
            src={Category1Img1}
            alt="Category"
            key={data.category_id}
          ></img>,
        ];
      case "2":
        return [
          <img
            id={data.category_id}
            src={Category2Img1}
            alt="Category"
            key={data.category_id}
          ></img>,
        ];
      case "3":
        return [
          <img
            id={data.category_id}
            src={Category3Img1}
            alt="Category"
            key={data.category_id}
          ></img>,
        ];
    }
  };

  const mySwitchFunctionBodyImg = (param) => {
    switch (param) {
      case "1":
        return [
          <img src={Category1Img2} alt="Category" key="1"></img>,
          <img src={Category1Img3} alt="Category" key="2"></img>,
        ];
      case "2":
        return [
          <img src={Category2Img2} alt="Category" key="1"></img>,
          <img src={Category2Img3} alt="Category" key="2"></img>,
        ];
      case "3":
        return [
          <img src={Category3Img2} alt="Category" key="1"></img>,
          <img src={Category3Img3} alt="Category" key="2"></img>,
        ];
    }
  };

  return (
    <div className="col-md-4 col-sm-6 ">
      <div className="card mb-30">
        <a className="card-img-tiles" href="shop-grid-ls.html">
          <div className="inner">
            <div className="main-img">
              {mySwitchFunctionHeaderImg(data.category_id)}
            </div>
            <div className="thumblist">
              {mySwitchFunctionBodyImg(data.category_id)}
            </div>
          </div>
        </a>
        <div className="card-body text-center">
          <h4 className="card-title">{data.description}</h4>
          <p className="text-muted">A Partir de {data.price}</p>
          <a
            className="btn btn-outline-primary btn-sm"
            href="shop-grid-ls.html"
          >
            Ver Productos
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeaturedComponent;
