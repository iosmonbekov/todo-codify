import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addProduct, changeProduct } from "../../api/api";
import Modal from "../../pages/HomePage/components/modal";
import "./add-modal.css";

const AddModalUseForm = ({ isShown, setIsshown, product = null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (errors?.name) {
      console.log(errors?.name?.message);
    }
    try {
      if (product) {
        await changeProduct(product.id, data);
      } else {
        await addProduct(data);
      }
      reset();
      setIsshown(false);
    } catch (error) {
      console.dir(error);
      throw new Error("Что-то не так с пост запросом");
    }
  };
  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsshown}
      onSubmit={handleSubmit(onSubmit)}
    >
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
