import { useForm} from "react-hook-form";
import { useState, useEffect  } from "react";
import 'react-quill/dist/quill.snow.css';
import { Button
 } from "../Button/Button";
 import { Document, Page } from 'react-pdf'

const CV = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [allCVs, setAllCVs] = useState(null);
  const onSubmit = async file => {
    const formData = new FormData();
    formData.append('file', file.CV[0]);

    try {
        const response = await fetch('http://localhost:5000/uploadCV', {
            method: 'POST',
            mode: 'cors',
            body: formData
        });

        if (response.ok) {
            console.log('File uploaded successfully');
        } else {
            console.error('Failed to upload file');
        }
    } catch (error) {
        console.error('Error uploading file: ', error);
    }
};
    useEffect(() => {
        fetch('http://localhost:5000/displayCVs')
        .then(response=>{
        if (response.ok) {
            return response.json()
        }
        throw response
        })
        .then(data =>{
        setAllCVs(data);
        })
        .catch(error => {
        console.error("Error fetching data: ", error);
        })
    }, [])

    return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)} id="uploadCV">
          <label>Upload CV</label>
          <input type="file" accept="application/pdf"  {...register("CV")}/>
          <Button type="submit" form="uploadCV" name="Submit" />
          </form>
      {allCVs && <Document file={{data: allCVs}}>
      <Page pageNumber={1} /> </Document>}
      </div>
    )
  }
  

export default CV;