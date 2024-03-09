import { useForm } from "react-hook-form"


const AddProject = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async data => {
      const response = await fetch('http://localhost:5000/api', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      });
      const data2 = await response.json();
      console.log(data2);
        
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

export default AddProject;