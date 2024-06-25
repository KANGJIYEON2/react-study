import React from "react";

const Button = ({ item }) => {
  return <button className={item.className}>{item.title}</button>;
};

export default Button;
