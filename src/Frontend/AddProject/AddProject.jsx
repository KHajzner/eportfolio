import { useForm } from "react-hook-form"


export const AddProject = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
      console.log(data);
    }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Title</label>
      <input placeholder="Title" />
      <label>Description</label>
      <input placeholder="Description" />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}