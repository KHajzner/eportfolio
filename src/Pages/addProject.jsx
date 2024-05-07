import Settings from "../Frontend/Settings/Settings";
import React, { useState } from "react";
import bcrypt from 'bcryptjs'
import "../Frontend/SocialMedia/AddSocialMedia.css";
import AddProject from "../Frontend/Projects/AddProject";

const AddProjectPage = () => {
 
    const [isAdmin, setIsAdmin] = useState(false);

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("admin", salt);
    const checkPassword = () => {
      const password = document.getElementById("password").value;
      const hashedPassword = bcrypt.compareSync(password, hash);
      if (hashedPassword) { 
        setIsAdmin(true);
      } else {
        alert("Incorrect Password");
      }
    };
  
   return (
    <>
        {isAdmin ? <AddProject />
        :
        (
        <form id="passwordForm" onSubmit={checkPassword}>
        <input type="password" id="password" name="password" placeholder="Input Password"/>
        <button>Submit</button>
        </form>
        )
    }
    </>
   );
  };
  
export default AddProjectPage;