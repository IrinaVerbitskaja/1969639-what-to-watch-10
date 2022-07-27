import {useState, ChangeEvent, Fragment} from 'react';

const DEFAULT_RATING_VALUE = '0';
const starts = Array.from({length: 10}, (i: number) => i + 1).reverse();

function Comments (): JSX.Element {

  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<string>(DEFAULT_RATING_VALUE);

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const radioChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">

          {starts.map((startNumber) => (
            <Fragment key={startNumber}>
              <input className="rating__input" id={`star-${startNumber}`} type="radio" name="rating" value={`${rating}`} onChange={radioChangeHandle}/>
              <label className="rating__label" htmlFor={`star-${startNumber}`}>Rating `${startNumber}`</label>
            </Fragment>
          ))}

        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" onChange={fieldChangeHandle} value={comment} name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default Comments;
