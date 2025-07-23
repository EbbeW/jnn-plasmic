import * as React from "react";
import { PlasmicCheckbox } from "./plasmic/jong_nederland_neeritter/PlasmicCheckbox";

function Checkbox_(props, ref) {
  const { plasmicProps, state } = PlasmicCheckbox.useBehavior(props, ref);
  return <PlasmicCheckbox {...plasmicProps} />;
}

const Checkbox = React.forwardRef(Checkbox_);

export default Object.assign(Checkbox, {
  __plumeType: "checkbox",
  __plasmicFormFieldMeta: { valueProp: "isChecked" }
});
