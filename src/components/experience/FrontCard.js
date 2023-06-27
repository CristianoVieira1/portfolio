/* eslint-disable no-undef */
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { frontData } from "./data";

export const FrontCard = () => {
  return (
    <div className="experience__content">
      {frontData.map((data, key) => {
        return (
          <div key={key}>
            <Front
              key={key}
              title={data.title}
              subTitle={data.subTitle}
              date={data.date}
            />
          </div>
        );
      })}
    </div>
  );
};

const Front = ({ title, subTitle, date }) => {
  if (!title) return <div />;
  return (
    <article className="experience__details">
      <BsPatchCheckFill />
      <div>
        <h4>{title}</h4>
        <small className="text-light">{subTitle}</small>
        <p className="date">{date}</p>
      </div>
    </article>
  );
};
