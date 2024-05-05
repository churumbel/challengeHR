import React from "react";

const UserQuestion = ({ questionText }) => {
  return (
    <div className="userQuestionFormat">
      <p>{questionText}</p>
    </div>
  );
};

export default UserQuestion;
