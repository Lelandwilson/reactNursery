import React from "react";
import StaffMember from "./StaffMember";
import staffList from "../Database/staffData.js";
import classes from "./StaffTable.module.css";

export default function StaffTable() {
  return (
    <table>
      <tbody>
        {staffList.map((staff_Member) => {
          return <StaffMember key={staff_Member.id} data = {staff_Member} />;
        })}
      </tbody>
    </table>
  );
}
