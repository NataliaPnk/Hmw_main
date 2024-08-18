import React from "react";

function ServiceItem({ title, color, backgroundColor }) {
  const style = {
    color: color || "white",
    backgroundColor: backgroundColor,
  };

  const titleContent = Array.isArray(title)
    ? title.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : title;

  return (
    <div className="ServiceItem" style={style}>
      {titleContent}
    </div>
  );
}

export default ServiceItem;
