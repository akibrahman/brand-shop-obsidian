import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
  const { _id, name, image, type, price, brandName, shortDes, rating } =
    useLoaderData();
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const type = form.type.value;
    const price = form.price.value;
    const brandName = form.brandName.value;
    const shortDes = form.shortDes.value;
    const rating = form.rating.value;
    const updatedProduct = {
      name,
      image,
      type,
      price,
      brandName,
      shortDes,
      rating,
    };
    fetch(`http://localhost:5000/product/edit/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated");
        }
      });
  };

  if (!brands) {
    return (
      <div className="flex justify-center items-center bg-[#131313] h-screen">
        <Dna
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  } else {
    return (
      <div className="bg-[#131313] py-20">
        <div className="w-max mx-auto rounded-md border-2 bg-[#24252a]">
          <form onSubmit={handleForm}>
            <div className="flex gap-20 justify-evenly pt-12 px-24 rounded-md">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-white font-semibold text-md"
                    htmlFor=""
                  >
                    Name:
                  </label>
                  <input
                    defaultValue={name}
                    className="px-4 py-3 rounded-md focus:outline-none"
                    type="text"
                    name="name"
                    placeholder="Product Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-white font-semibold text-md"
                    htmlFor=""
                  >
                    Image URL:
                  </label>
                  <input
                    defaultValue={image}
                    className="px-4 py-3 rounded-md focus:outline-none"
                    type="text"
                    name="image"
                    placeholder="Image URL"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-white font-semibold text-md"
                    htmlFor=""
                  >
                    Type:
                  </label>
                  <input
                    defaultValue={type}
                    className="px-4 py-3 rounded-md focus:outline-none"
                    type="text"
                    name="type"
                    placeholder="Product Type"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-white font-semibold text-md"
                    htmlFor=""
                  >
                    Price:
                  </label>
                  <input
                    defaultValue={price}
                    className="px-4 py-3 rounded-md focus:outline-none"
                    type="number"
                    name="price"
                    placeholder="Product Price"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-white font-semibold text-md"
                    htmlFor=""
                  >
                    Brand Name:
                  </label>
                  <select
                    required
                    defaultValue={brandName}
                    name="brandName"
                    className="px-4 py-3 rounded-md focus:outline-none text-[#9CA7C4]"
                  >
                    {brands.map((brandName) => (
                      <option
                        key={brandName._id}
                        value={brandName.BrandName.toLowerCase()}
                      >
                        {brandName.BrandName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-white font-semibold text-md"
                    htmlFor=""
                  >
                    Short Description:
                  </label>
                  <textarea
                    defaultValue={shortDes}
                    className="rounded-md focus:outline-none px-2 py-1"
                    type="text"
                    name="shortDes"
                    rows="6"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-white font-semibold text-md"
                    htmlFor=""
                  >
                    Rating:
                  </label>
                  <input
                    defaultValue={rating}
                    className="px-4 py-3 rounded-md focus:outline-none"
                    type="number"
                    step="0.01"
                    name="rating"
                    placeholder="Rating"
                  />
                </div>
              </div>
            </div>
            <input
              className="w-max bg-orange-400 block mx-auto text-white px-4 py-2 rounded-full mb-10 mt-10 font-semibold active:scale-75 duration-300 cursor-pointer"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    );
  }
};

export default EditProduct;