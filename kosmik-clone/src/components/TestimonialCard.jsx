const TestimonialCard = ({ name, title, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="user-details">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <div className="user-testimonial">
        <p>{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
