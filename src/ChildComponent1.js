import React from "react";
/* import your newly made react components here, before the CSS*/
import "./styles.css";
/* in the "explorer" tab on the left, you can create new JS files (in "src" folder) */
import ChildComponent2 from "./ChildComponent2"

export default function ChildComponent1() {
  return (
    <div className="ChildComponent1">
       <p>I’m child component One</p>
      <>👋</> I'm the HelpfulTemplateComponent. Copy my code from the "explorer"
      file viewing tab when you want to make a new component.
      <h5>This is an H5 tag inside the Helpful Template Component. hi!</h5>
      <ChildComponent2 />
      </div>
  );
}
