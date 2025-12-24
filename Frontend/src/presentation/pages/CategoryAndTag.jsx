import { Alert, Card } from "antd";
import { IoPencil } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from "react";
import CategoryService from "../../usecases/CategoryService";
import { API_URL_ADMIN } from "../../constants/api";
import TagService from "../../usecases/TagService";
import { Link } from "react-router-dom";
import useUpdateCategory from "../../hooks/useUpdateCategory";
import { MdDelete } from "react-icons/md";

export default function CategoryAndTag() {
  const [categories, setCategory] = useState([]);
  const [tags, setTag] = useState([]);
  const [isUpdate, setIsUpdate] = useState({});
  const [text, setText] = useState("");

  const handleUpdate = (id) => {
    setIsUpdate((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const { showAlert, refText, handleUpdateSuccess, handleDelete} =
    useUpdateCategory(setIsUpdate);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const newCategoryService = new CategoryService();
        const newTagService = new TagService();
        const resCategories = await newCategoryService.getCategoryList(
          API_URL_ADMIN
        );
        const resTag = await newTagService.getTagList(API_URL_ADMIN);
        if (resCategories.code === 200) {
          setCategory(resCategories.categories);
        }
        if (resTag.code === 200) {
          setTag(resTag.tags);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchApi();
  }, [isUpdate]);

  
  return (
    <>
      {showAlert.show && (
        <Alert
          title={showAlert.title}
          type={showAlert.type}
          closable={{ closeIcon: true, "aria-label": "close" }}
        />
      )}
      <div className="category-tag">
        <Card title="Danh mục" variant="borderless" style={{ width: 300 }}>
          {categories &&
            categories.map((category) => {
              return (
                <div className="category" key={category._id}>
                  <input
                    className="category-title"
                    value={
                      isUpdate[category._id] ? text : category.category_name
                    }
                    readOnly={isUpdate[category._id] ? false : true}
                    onChange={(e) => {
                      refText.current = e.target.value;
                      setText(e.target.value);
                    }}
                  />
                  {!isUpdate[category._id] && (
                    <IoPencil
                      className="icon-update"
                      onClick={() => handleUpdate(category._id)}
                    />
                  )}
                  {isUpdate[category._id] && (
                    <TiTick
                      className="icon-tick"
                      onClick={() =>
                        handleUpdateSuccess(category._id, "category")
                      }
                    />
                  )}
                  <MdDelete
                    className="icon-delete"
                    onClick={() => handleDelete(category._id, "category")}
                  />
                </div>
              );
            })}

          <Link className="icon-add" to="category/create">
            <IoIosAddCircleOutline />
          </Link>
        </Card>
        <Card title="Thẻ" variant="borderless" style={{ width: 300 }}>
          {tags &&
            tags.map((tag) => {
              return (
                <div className="category" key={tag._id}>
                  <input
                    className="category-title"
                    value={isUpdate[tag._id] ? text : tag.tag_name}
                    readOnly={isUpdate[tag._id] ? false : true}
                    onChange={(e) => {
                      refText.current = e.target.value;
                      setText(e.target.value);
                    }}
                  />
                  {!isUpdate[tag._id] && (
                    <IoPencil
                      className="icon-update"
                      onClick={() => handleUpdate(tag._id)}
                    />
                  )}
                  {isUpdate[tag._id] && (
                    <TiTick
                      className="icon-tick"
                      onClick={() => handleUpdateSuccess(tag._id, "tag")}
                    />
                  )}
                  <MdDelete
                    className="icon-delete"
                    onClick={() => handleDelete(tag._id, "tag")}
                  />
                </div>
              );
            })}

          <Link className="icon-add" to="tag/create">
            <IoIosAddCircleOutline />
          </Link>
        </Card>
      </div>
    </>
  );
}
