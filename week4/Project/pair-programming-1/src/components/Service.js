function Service({ id, icon, title, text, onDelete }) {
  const handleDelete = () => {
    onDelete(id); // Pass the item's ID to the parent component for deletion
  };

  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon} />
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
        <button onClick={handleDelete} className="button">
          Delete
        </button>
      </div>
    </article>
  );
}

export default Service;
