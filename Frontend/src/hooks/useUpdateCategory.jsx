import { useEffect, useRef, useState } from "react";
import CategoryService from "../usecases/CategoryService";
import { API_URL_ADMIN } from "../constants/api";
import TagService from "../usecases/TagService";

export default function useUpdateCategory(setIsUpdate) {
  const refText = useRef("");

  const [showAlert, isShowAlert] = useState({
    title: "",
    type: "",
    show: false,
  });
  useEffect(() => {
    let timer;
    if (showAlert.show) {
      timer = setTimeout(() => {
        isShowAlert({
          ...showAlert,
          show: false,
        });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);
  const handleUpdateSuccess = async (id, type) => {
    if (type === "category") {
      const newCategoryService = new CategoryService();
      const res = await newCategoryService.updateCategory(API_URL_ADMIN, id, {
        category_name: refText.current,
      });
      if (res.code === 200) {
        isShowAlert({
          title: res.message,
          type: "success",
          show: true,
        });
      } else {
        isShowAlert({
          title: res.message,
          type: "error",
          show: true,
        });
      }
      setIsUpdate((prev) => ({
        ...prev,
        [id]: false,
      }));
    } else {
      const newTagService = new TagService();
      const res = await newTagService.updateTag(API_URL_ADMIN, id, {
        tag_name: refText.current,
      });
      if (res.code === 200) {
        isShowAlert({
          title: res.message,
          type: "success",
          show: true,
        });
      } else {
        isShowAlert({
          title: res.message,
          type: "error",
          show: true,
        });
      }
      setIsUpdate((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };
  const handleDelete = async (id,type) => {
    if(type === "category"){

      const newCategoryService = new CategoryService();
      const res = await newCategoryService.deleteCategory(API_URL_ADMIN,id);
      if(res.code === 200){
        isShowAlert({
          title: res.message,
          type: "success",
          show: true,
        });
      }
      else{
        isShowAlert({
          title: res.message,
          type: "error",
          show: true,
        });
      }
    }
    else{
      const newTagService = new TagService();
      const res = await newTagService.deleteTag(API_URL_ADMIN,id);
      if(res.code === 200){
        isShowAlert({
          title: res.message,
          type: "success",
          show: true,
        });
      }
      else{
        isShowAlert({
          title: res.message,
          type: "error",
          show: true,
        });
      }
      setIsUpdate((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
    
  };
  return {
    showAlert,
    refText,
    handleUpdateSuccess,
    handleDelete
  };
}
