import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isAuthProtected,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && localStorage.getItem("accessToken")) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};
