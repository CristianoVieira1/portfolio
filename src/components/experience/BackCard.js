/* eslint-disable no-undef */
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { backData } from "./data";

export const BackCard = () => {
  return (
    <div className="experience__content">
      {backData.map((data, key) => {
        return (
          <div key={key}>
            <Back key={key} title={data.title} subTitle={data.subTitle} />
          </div>
        );
      })}
    </div>
  );
};

const Back = ({ title, subTitle }) => {
  if (!title) return <div />;
  return (
    <article className="experience__details">
      <BsPatchCheckFill />
      <div>
        <h4>{title}</h4>
        <small className="text-light">{subTitle}</small>
      </div>
    </article>
  );
};
