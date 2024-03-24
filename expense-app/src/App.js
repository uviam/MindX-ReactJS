import "./App.css";
import { React, useState } from "react";
import { Button, Input, Flex } from "antd";

function App() {
  // logic show input/button
  const [inputState, setInputState] = useState(false);

  if (inputState) {
    console.log(inputState);
    return (
      <div className="App">
        <Flex gap="small" wrap="wrap">
          <Input placeholder="Basic usage" />
        </Flex>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Flex gap="small" wrap="wrap">
          <Button type="primary" onClick={() => setInputState(true)}>
            Add New Expense
          </Button>
        </Flex>
      </div>
    );
  }
}

export default App;
