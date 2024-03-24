import React from "react";
import { useState } from "react";
import { Button, Flex } from "antd";

const AddNewButton = () => {
  return (
    <Flex gap="small" wrap="wrap">
      <Button type="primary">Add New Expense</Button>
    </Flex>
  );
};

export default AddNewButton;
