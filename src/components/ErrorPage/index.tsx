import React from "react";
import { IError } from "../../utils/dataTypes";

const ErrorPage = (props: { error: IError }) => {
  return (
    <div className="errorPage">
      <h1>Something went wrong!</h1>
      <p>{props?.error?.message}</p>
    </div>
  );
};

export default ErrorPage;
