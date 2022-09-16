import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addProduct, changeProduct } from "../../api/api";
import Modal from "../../pages/HomePage/components/modal";
import { useSelector, useDispatch } from "react-redux";
import "./add-modal.css";

const AddModalUseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { currentProduct } = useSelector((state) => state);

  const onSubmit = async (data) => {
    if (errors?.name) {
      console.log(errors?.name?.message);
    }
    try {
      if (currentProduct) {
        await changeProduct(currentProduct.id, data);
      } else {
        await addProduct(data);
      }
      reset();
    } catch (error) {
      console.dir(error);
      throw new Error("Что-то не так с пост запросом");
    }
  };
  useEffect(() => {
    if (currentProduct) {
      reset(currentProduct);
    }
  }, [currentProduct, reset]);

  return (
    <Modal onSubmit={handleSubmit(onSubmit)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          {...register("name", {
            required: true,
          })}
        />

        <input
          placeholder="price"
          type={"number"}
          {...register("price", {
            required: true,
          })}
        />
        <input
          placeholder="image"
          {...register("img", {
            required: true,
          })}
        />
      </form>
    </Modal>
  );
};
export default AddModalUseForm;
