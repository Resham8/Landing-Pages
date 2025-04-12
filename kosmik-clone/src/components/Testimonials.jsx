import testimonialsData from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-heading">
        <h1>“Kosmik is my one-stop-shop for research.”</h1>
      </div>
      <div className="testimonials-subheading">
        <p>What our users are saying about Kosmik.</p>
      </div>
      <div className="testimonials">
        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              title={item.title}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
