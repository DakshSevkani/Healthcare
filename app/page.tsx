import React from "react";
import HospilTemplate from "./Hospil";
const page = async () => {
  // const Function =async()=>
  const Responce = await fetch(
    "https://store-admin-uat.actifyzone.com/store-uat/api/dynamic-template",
    {
      method: "GET",
      headers: {
        "X-Tenant-ID": "22",
      },
    },
  );
  const Data = await Responce.json();
  console.log("Text",Data)
  return (
    <div>
      <HospilTemplate data={Data.formJson[0]} />
    </div>
  );
};

export default page;