import { useForm } from "react-hook-form"

const AddProject = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    var request = require('request');
        var clientServerOptions = {
              uri: 'http://localhost:5000/api',
              body: JSON.stringify(data),
              method: 'POST',
              headers: {
               'Content-Type': 'application/json'
              }
              }
        request(clientServerOptions, function (error, response) {
        console.log(error,response.body);
        return;
      });
        
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