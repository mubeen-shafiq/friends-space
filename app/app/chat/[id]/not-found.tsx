import { Flex, Result } from "antd";
import { LinkButton } from "@/app/components/common/link-button";

function ChatNotFound() {
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        height: "100%",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, We are unable to find your chat!."
        extra={
          <LinkButton
            linkProps={{ href: "/app/chat", replace: true }}
            btnProps={{ type: "primary" }}
          >
            Back to Homepage
          </LinkButton>
        }
      />
    </Flex>
  );
}

export default ChatNotFound;
