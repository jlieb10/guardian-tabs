import React from "react";

const ArticleCard = props => {
  return (
    <a className="article-card" href={props.webUrl}>
      <span className="article-card__number">{props.index + 1}</span>
      <h3 className="article-card__title">{props.webTitle}</h3>
    </a>
  );
};

export default ArticleCard;
