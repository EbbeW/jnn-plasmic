/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function JnnInstagramIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.4.9C8.8 2 4.2 5.9 2 10.6.1 14.4 0 16.1.5 33c.6 22.4 1.7 25.9 9.2 29.2 4.4 1.9 6 2 24.3 1.6 20.7-.6 23.3-1.1 27.5-5.8 1.9-2 2-3.9 2.3-25.5l.3-23.2-2.7-3.2C56.6.4 54.9 0 34.8.1 24.7.2 15.1.5 13.4.9zm37.9 5.5c1.8.7 4.2 2.4 5.4 3.7 2.1 2.3 2.2 3.1 2 22.1-.3 26.3 1.5 24.5-24.2 25.4-16.6.6-19.4.5-22.2-.9-3.4-1.8-4.8-4.6-3.8-7.7.3-1.1.2-2-.3-2s-1-4.6-1-10.2c-.1-8.5.1-10.3 1.6-11.4 1.6-1.3 1.5-1.4-.5-2s-2.2-1.1-1.6-5.3C7.4 12.5 9.4 9 12 9c1.1 0 2-.4 2-.9 0-1.4 5.4-2 6.8-.8.9.7 1.6.7 2 0 .8-1.2 16.9-1.6 17.7-.3.3.5 1.8.2 3.3-.6 3.3-1.7 3.5-1.7 7.5 0zm-3.3 6c-1.8 2.2-.5 4.8 2.2 4.4 1.7-.2 2.3-1 2.3-2.8 0-2.9-2.6-3.8-4.5-1.6z"
        }
      ></path>

      <path
        d={
          "M27 15.7c-2.8 1-8.8 8-10 11.7-1.6 5.1-.6 9.7 3.5 15.1 1.9 2.5 3.5 5 3.5 5.6s.6.9 1.4.6 3.1-.1 5.1.4c2.9.8 4.4.7 7-.5 1.8-.9 3.9-1.6 4.7-1.6s2-1.1 2.6-2.5S46.4 42 47 42c.5 0 1-.9 1-1.9 0-1.1.6-2.6 1.4-3.4 1.1-1 1.2-2.4.6-5.1-.5-2.2-.4-3.8.2-4.2.5-.4.3-1.3-.6-2.3l-4.3-4.9C41.7 16 32.5 13.7 27 15.7zm13.8 8.9c2.8 3.2 3 10.8.4 14-5.3 6.7-13.6 5.3-17.8-2.8-2.1-4-1.1-7.2 3.4-11.4 3.3-3.1 4.1-3.4 7.7-2.9 2.5.3 4.8 1.5 6.3 3.1z"
        }
      ></path>
    </svg>
  );
}

export default JnnInstagramIcon;
/* prettier-ignore-end */
