"use client";

import { ErrorPagePropsType } from "@/definitions/common";
import { Button, Result } from "antd";

function ErrorPage({ reset }: ErrorPagePropsType) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong from our side."
        extra={
          <Button type="primary" onClick={() => reset()}>
            Try Again
          </Button>
        }
      />
    </div>
  );
}

export default ErrorPage;
