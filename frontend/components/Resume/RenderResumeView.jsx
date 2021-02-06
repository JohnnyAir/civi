import React from "react";
import * as Components from "./UIElements";

function traverse(children) {
  if (!children || typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(traverseJson);
  return traverseJson(children);
}

function traverseJson(target) {
  if (!target || typeof target === "string") return target;
  return React.createElement(
    Components[target.component] || target.component,
    target.props,
    traverse(target.children)
  );
}

export default function JsonRenderer({ json }) {
  if (!json || typeof json !== "object")
    throw `expect props json to be a json object but found ${typeof json}`;
  return traverseJson(json);
}
