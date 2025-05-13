import Header from "@/components/Header";
import React from "react";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="harshbajani7@gmail.com"
        title="harsh"
        userImg="/assets/images/dummy.jpg"
      />
    </div>
  );
};

export default Page;
