import React from "react";
import styles from "../../../../common/Common.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "react-rating";
import "./StarGlobal.css";
import { postRating } from "../../../../redux/RatingReducer/actions";

function CardItems(props) {
  const dispatch = useDispatch();
  const ratingItems = useSelector((state) => {
    const items = state.ratinges.rating.filter(
      (item) => item.cafeId === props.item.id
    );
    return (
      items.reduce((value, item) => {
        return item.rating + value;
      }, 0) / items.length
    );
  });
  const id = props.item.id;
  const m = ratingItems.toFixed(1);
  const handleClick = (rating) => {
    dispatch(postRating(id, rating));
  };

  return (
    <div className={styles.cardItem1}>
      <NavLink to={`${props.item.id}`} className={styles.HomePage}>
        <div className={styles.cardImage}>
          <img src={props.item.url} alt="images" />
        </div>
        <div className="card-tittle">
          <div className={styles.tittle1}>
            <span>{props.item.title}</span>
          </div>
        </div>
      </NavLink>
      <div className="addressees">
        <div className={styles.address}>
          <span>{props.item.address}</span>
        </div>
      </div>
      <Rating
        initialRating={m}
        onClick={handleClick}
        emptySymbol={"fa fa-star star_gray"}
        fullSymbol={"fa fa-star"}
      />
      <p>Rating is {m}</p>
    </div>
  );
}

export default CardItems;
