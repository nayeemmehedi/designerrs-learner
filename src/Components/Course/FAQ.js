import React from "react";
import { Element, Link } from "react-scroll";

const CourseFAQ = ({ courses }) => {
  return (
    <Element id="FAQ">
    <div className="my-5">
      <h4 className="mb-4">
        Frequently Asked
        <br />
        Questions
      </h4>
      {!!courses?.faq && (
        <div className="accordion" id="accordionExample">
          {courses?.faq?.map((fq, index) => (
            <div className="accordion-item">
              <h2 className="accordion-header" id={"heading" + index}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + index}
                  aria-expanded="false"
                  aria-controls={"collapse" + index}
                >
                  {fq.title}
                </button>
              </h2>
              <div
                id={"collapse" + index}
                className="accordion-collapse collapse collapse"
                aria-labelledby={"heading" + index}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body font_13">{fq.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </Element>
  );
};

export default CourseFAQ;
