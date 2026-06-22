// props short for properties, are the standard way of passing data
// between components, and generally look like HTML attributes.

// There are two ways of ingesting props:
// a) one single argument for all props > each prop is a property on the object
// b) destructuring > each prop directly (eg {concept, author})

// you'd use this in JSX as:
// <NewConcept concept="How to make a component" author="Tyler" />

export default function NewConcept({ concept }) {
  // I think destructuring is the better way because then it's
  // immediately apparent what you're ingesting/using.
  return <p>In this class we'll learn: {concept}</p>;
}
