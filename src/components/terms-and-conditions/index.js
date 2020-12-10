import React from "react";
import PropTypes from "prop-types";

const TermsAndConditions = () => {
  const terms = [
    {
      id: 0,
      message:
        "Advertising is key factor in your website promotion. Let people talk about you, your products and your services.",
    },
    {
      id: 1,
      message:
        "You see, people are always on the look out for good content right? Your sit should have really good contents. Don't write",
    },
    {
      id: 2,
      message:
        "Welcome to my website or Ours is a World's first company... blah blah unless and until you really have dominating product.",
    },
    {
      id: 3,
      message:
        "You sell your products or services as like others, but you think you must be noticed",
    },
    {
      id: 4,
      message:
        "Your offer should be different to attract visitor. Your presentation should be mind catching.",
    },
    {
      id: 5,
      message:
        "Get aware of advertisers online. There are few major players around.",
    },
  ];
  return (
    <section className="container mx-auto p-8">
      <h2 className="font-barlow mb-6 font-bold text-blue-900 text-3xl">Terms &amp; Conditions</h2>
      <ul className="list-inside">
        {terms.map((term) => {
          return <li key={term.id} className="list-disc">{term.message}</li>;
        })}
      </ul>
    </section>
  );
};


TermsAndConditions.propTypes = {
  terms: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
  }),
};

export default TermsAndConditions;
