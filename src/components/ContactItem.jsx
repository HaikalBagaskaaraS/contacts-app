import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <div className="contact-item__image">
        <img src={imageUrl} alt="contact avatar" />
      </div>

      <div className="contact-item__body">
        <h3 className="contact-item__title">{name}</h3>
        <p className="contact-item__username">@{tag}</p>
      </div>

      <button className="contact-item__delete" onClick={() => onDelete(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default ContactItem;
