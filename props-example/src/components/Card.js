import React from "react";

//props.title 이런방식으로 전달하면 {} 할 필요 없음
// const Card = (props) = {
//const {title, logo} = props;//이러한 방식도 가능
//.
//..
//}
const Card = ({ title, logo }) => {
  return (
    <>
      <div>{title}</div>
      <img src={logo} alt="" />
    </>
  );
};

export default Card;
