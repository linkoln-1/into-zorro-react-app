import React from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from './action';
import { useParams } from 'react-router-dom';

function ButtonAddReview(props) {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);

  const handleAddReview = () => {
    dispatch(addReview(props.text, props.setText, id, props.positive));
    props.setText('');
    props.setPositive('');
  };

  return (
    <div>
      <button
        onClick={() =>
          handleAddReview(
            props.text,
            props.setText,
            id,
            props.positive,
            props.setPositive,
          )
        }
        disabled={props.positive === ''}
      >
        Оставить отзыв
      </button>
    </div>
  );
}

export default ButtonAddReview;
