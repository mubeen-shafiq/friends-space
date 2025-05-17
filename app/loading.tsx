import { Flex, Spin } from "antd";

function AppLoading() {
  return (
    <Flex justify="center" align="center" style={{ height: "100%" }}>
      <Spin size="large" />
    </Flex>
  );
}

export default AppLoading;
