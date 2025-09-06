import React, { useEffect, useState } from "react";
import MiniProjectsHeader from "../comp/Header";
import axios from "axios";

function AddProduct() {
  useEffect(() => {
    getProductData();
  }, []);
  const [productObj, setProductObj] = useState({});
  const postProductData = () => {
    axios
      .post("http://localhost:5001/api/product", {
        ...productObj, productImage : imageUrl
      })
      .then((res) => alert(res.data));
  };

  const [productList, setProductList] = useState([]);
  const getProductData = () => {
    axios
      .get("http://localhost:5001/api/product")
      .then((res) => setProductList(res.data));
  };

  const updateProduct = () => {
    axios
      .put(`http://localhost:5001/api/product/${productObj._id}`, productObj)
      .then((res) => {
        alert(res.data);
        getProductData();
      });
  };
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "CodingShaala"); // from Cloudinary settings

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dzkyn1ypi/image/upload`,
        formData
      );
      console.log(response.data)
      setImageUrl(response.data.secure_url); // ✅ Cloudinary hosted URL
      setImageUrl( response.data.secure_url)
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };
  return (
    <div>
      <MiniProjectsHeader></MiniProjectsHeader>
      <div>{JSON.stringify(productObj)}</div>
      <div className="flex flex-col m-2 gap-2">
        <input
          value={productObj.categoryName}
          onChange={(e) =>
            setProductObj({ ...productObj, categoryName: e.target.value })
          }
          className="border p-2"
          placeholder="Enter Category"
        ></input>
        <input
          value={productObj.productName}
          onChange={(e) =>
            setProductObj({ ...productObj, productName: e.target.value })
          }
          className="border p-2"
          placeholder="Enter Product Name"
        ></input>
        <input
          value={productObj.productInfo}
          onChange={(e) =>
            setProductObj({ ...productObj, productInfo: e.target.value })
          }
          className="border p-2"
          placeholder="Enter Product Info"
        ></input>
        <input
          value={productObj.productPrice}
          onChange={(e) =>
            setProductObj({ ...productObj, productPrice: e.target.value })
          }
          className="border p-2"
          placeholder="Enter Product Price"
        ></input>
        <input
          value={productObj.productDiscount}
          onChange={(e) =>
            setProductObj({ ...productObj, productDiscount: e.target.value })
          }
          className="border p-2"
          placeholder="Enter Product Discount"
        ></input>
        <input
          type="file"
          
          onChange={(e) =>
            handleImageUpload(e)
          }
          className="border p-2"
          placeholder="Enter Product Image"
        ></input>
        <button
          onClick={() => postProductData()}
          className="bg-blue-500 p-2 text-white w-[10%]"
        >
          Add
        </button>
        <button
          onClick={() => updateProduct()}
          className="bg-blue-500 p-2 text-white w-[10%]"
        >
          Update
        </button>
      </div>

      <div>
        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Info</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Discount</th>
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((i) => (
                <tr className="border-b hover:bg-gray-100 transition">
                  <td className="py-2 px-4">{i.categoryName} </td>
                  <td className="py-2 px-4 font-semibold">{i.productName}</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">₹</td>
                  <td className="py-2 px-4 text-green-600">%</td>
                  <td className="py-2 px-4">
                    <img src="" className="h-12 w-12 object-cover rounded" />
                  </td>
                  <td className="py-2 px-4">
                    <button onClick={() => setProductObj(i)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
