import React from "react";
import { useParams } from "react-router-dom";
import classes from './StaffMember.module.css' ;


export default function StaffMember(props) {
    const {id, name, role, image, description} = props.data;


  return (
    <tr>
      <td className={classes.sectionOne}>
        <img className={classes.staffPic} src={image} />
        <br />
        {name}<br/>
        {role}
        </td>  
      <td className={classes.sectionTwo}>
        {description}
      </td>
    </tr>
  );
};
