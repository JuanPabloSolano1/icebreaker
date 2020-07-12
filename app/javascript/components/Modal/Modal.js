import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Modal = ({ name, sentence, show, click }) => {
  return (
    <div
      className="Modal"
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      }}
    >
      <div>
        <h1 className="modal-title">Hey! {name}</h1>
        <p className="modal-sentence">{sentence}</p>
      </div>
      <div>
        <a className="modal-next">
          <img
            className="modal-image"
            onClick={click}
            src={
              'https://res.cloudinary.com/pelle/image/upload/v1594581302/Screenshot_2020-07-09_15.19.48_wdnvve.png'
            }
          />
        </a>
      </div>
    </div>
  );
};
