"use client";
import { Button, Flex, Result } from "antd";
import { ErrorPagePropsType } from "@/definitions/common";

function ChatsError({ reset }: ErrorPagePropsType) {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100%",
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
    </Flex>
  );
}

export default ChatsError;
