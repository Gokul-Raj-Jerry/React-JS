import { Fragment, useState } from "react";


const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const showParagraphHandler = () => {
    setShowParagraph(prevValue => !prevValue);
  }
  return (
    <Fragment>
      <div>VIRTUAL DOM DIFFING</div>
      {showParagraph && <p>This is a new paragraph!</p>}
      <button onClick={showParagraphHandler}>Click Me!</button>
    </Fragment>
  );
};

export default App;

//Diffing allows us to add or insert only the necessary element(here <p> tag) into the DOM tree and doesn't re-render the whole component again.