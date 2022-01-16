import Header from "@src/components/Header";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { route_admin } from "../constants";
import { WrapperStyled } from "./styled";

export default function Site() {
  return (
    <WrapperStyled>
      <Switch>
        {route_admin.map(({ path, ...rest }, index) => (
          <Route key={index} path={path} {...rest} />
        ))}
      </Switch>
    </WrapperStyled>
  );
}
