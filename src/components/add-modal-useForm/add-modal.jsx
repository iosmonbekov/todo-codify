import { useForm } from "react-hook-form";
import { addProduct } from "../../api/api";
import Modal from "../../pages/HomePage/components/modal";
import "./add-modal.css";

const AddModalUseForm = ({ isShown, setIsshown }) => {
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
      await addProduct(data);
      reset();
      setIsshown(false);
    } catch (error) {
      console.dir(error);
      throw new Error("Что-то не так с пост запросом");
    }
  };
  console.log(watch("price"));

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
