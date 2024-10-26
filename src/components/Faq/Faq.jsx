import React, { useState } from "react";
import "./Faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What are my payment option?",
      answer: "You can pay using credit cards, PayPal, or other available methods.",
    },
    {
      question: "How can I invite a collaborator to the platform?",
      answer:
        "After creating your account, you will have the opportunity to create your first project that will be associated with the collaborators’ email. An invitation will be sent automatically. Then, the invited user will have to confirm their account by email and finish user onboarding.",
    },
    {
      question: "Can I upgrade my plan?",
      answer: "Yes, you can upgrade your plan at any time through the settings.",
    },
    {
      question: "Can I cancel my plan at any time?",
      answer: "Yes, you can cancel your plan anytime from the dashboard.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently asked question</h2>
      <p>Something is not clear? You need help? Check our FAQ section</p>
      <div className="faq-items">
        {faqItems.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{activeIndex === index ? "-" : "+"}</span> {item.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
