import { useEffect, useState } from "react";
import {
  createCategory,
  getCategoryById,
  updateCategory,
} from "../services/CategoryService";
import { useNavigate, useParams } from "react-router-dom";

const CategoryComponent = () => {
  const [categoryName, setCategoryName] = useState("");

  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    getCategoryById(id)
      .then((response) => {
        setCategoryName(response.data.categoryName);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function saveOrUpdateCategory(e) {
    e.preventDefault();

    const category = { categoryName };

    console.log(category);

    if (id) {
      updateCategory(id, category)
        .then((response) => {
          console.log(response.data);
          navigator("/categories");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createCategory(category)
        .then((response) => {
          console.log(response.data);
          navigator("/categories");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function pageTitle() {
    if (id) {
      return (
        <h2 className="text-center" style={{ marginTop: "10px" }}>
          Update Category
        </h2>
      );
    } else {
      return (
        <h2 className="text-center" style={{ marginTop: "10px" }}>
          Add Category
        </h2>
      );
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}

          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Category Name:</label>
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Enter Category Name"
                  className="form-control"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                ></input>
              </div>

              <button
                className="btn btn-success mb-2"
                onClick={(e) => saveOrUpdateCategory(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
