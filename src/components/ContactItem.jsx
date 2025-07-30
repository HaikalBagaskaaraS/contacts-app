import React from "react";
import DeleteButton from "./DeleteButton";
// import ContactItemBody from "./ContactItemBody";
// import ContactItemImage from "./ContactItemImage";

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

      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
