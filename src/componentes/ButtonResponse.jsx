import React from "react";

const ButtonResponse = ({ title, actionItems, onClickHandler }) => {
  return (
    <div className="buttonResponse">
      <div className="interviews">
        <p>{title}</p>
        <div className="options">
          {actionItems.map((actionItem, index) => (
            <button key={index} onClick={() => onClickHandler(actionItem)}>
              {actionItem.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonResponse;
