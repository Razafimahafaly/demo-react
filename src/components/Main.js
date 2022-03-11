import React from "react";
import { Switch, Route } from "react-router-dom";

import PostComment from "../PostComment";
import PostsContainer from "../PostsContainer";
import Home from "../Home";

function FragmentSupportingSwitch({ children }) {
  const flattenedChildren = [];
  flatten(flattenedChildren, children);
  return React.createElement.apply(
    React,
    [Switch, null].concat(flattenedChildren)
  );
}

function flatten(target, children) {
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === React.Fragment) {
        flatten(target, child.props.children);
      } else {
        target.push(child);
      }
    }
  });
}

const Main = () => (
  <main>
    <Switch>
      <FragmentSupportingSwitch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={PostsContainer} />
        <Route exact path="/comment/:id" children={<PostComment />} />
      </FragmentSupportingSwitch>
    </Switch>
  </main>
);

export default Main;
