/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: o1okMcGKKQpxNMvBHBF5AX
// Component: 4lb3-XGhjTbZ
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: o1okMcGKKQpxNMvBHBF5AX/projectcss
import sty from "./PlasmicJnnLogicaJaNeeZichtbaarheid.module.css"; // plasmic-import: 4lb3-XGhjTbZ/css

createPlasmicElementProxy;

export const PlasmicJnnLogicaJaNeeZichtbaarheid__VariantProps = new Array();

export const PlasmicJnnLogicaJaNeeZichtbaarheid__ArgProps = new Array(
  "ja",
  "nee",
  "conditie"
);

const $$ = {};

function PlasmicJnnLogicaJaNeeZichtbaarheid__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          conditie: true
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      {(() => {
        try {
          return $props.conditie;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return false;
          }
          throw e;
        }
      })()
        ? renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nPqm7
                )}
              >
                {"Ja"}
              </div>
            ),

            value: args.ja
          })
        : null}
      {(() => {
        try {
          return !$props.conditie;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })()
        ? renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vGz8N
                )}
              >
                {"nee"}
              </div>
            ),

            value: args.nee
          })
        : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicJnnLogicaJaNeeZichtbaarheid__ArgProps,
          internalVariantPropNames:
            PlasmicJnnLogicaJaNeeZichtbaarheid__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicJnnLogicaJaNeeZichtbaarheid__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicJnnLogicaJaNeeZichtbaarheid";
  } else {
    func.displayName = `PlasmicJnnLogicaJaNeeZichtbaarheid.${nodeName}`;
  }
  return func;
}

export const PlasmicJnnLogicaJaNeeZichtbaarheid = Object.assign(
  // Top-level PlasmicJnnLogicaJaNeeZichtbaarheid renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicJnnLogicaJaNeeZichtbaarheid
    internalVariantProps: PlasmicJnnLogicaJaNeeZichtbaarheid__VariantProps,
    internalArgProps: PlasmicJnnLogicaJaNeeZichtbaarheid__ArgProps
  }
);

export default PlasmicJnnLogicaJaNeeZichtbaarheid;
/* prettier-ignore-end */
