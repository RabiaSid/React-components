import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import Select from "./components/Select";
import Table from "./components/Table";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [tableData, setTableData] = useState([
    { name: "John ", age: 25, email: "john@example.com" },
    { name: "Doe", age: 30, email: "doe@example.com" },
    { name: "Smith", age: 18, email: "smith@example.com" },
    { name: "Jane ", age: 35, email: "jane@example.com" },
    { name: "Jimm", age: 58, email: "jimm@example.com" },
    { name: "Alias", age: 10, email: "alias@example.com" },
    { name: "Jack", age: 26, email: "jack@example.com" },
    { name: "Rossey", age: 42, email: "rossey@example.com" },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Handle button click logic
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="container m-0 p-0 ">
      <div className="main_div py-md-5 py-2 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-11 col-lg-8 col-xl-7">
            <div className="row d-flex justify-content-between align-items-center search my-2 shadow">
              <div className="col-8 col-lg-10 p-0 ps-2">
                <Input
                  placeholder="Enter Something"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4 col-lg-2 text-end p-0">
                <Button label="Click Me" onClick={handleButtonClick} />
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-4 col-xl-5 d-flex justify-content-between align-items-center flex-column my-2 ">
            <Select
              options={[
                { value: "1", label: "Iphone" },
                { value: "2", label: "Samsung" },
                { value: "3", label: "Vivo" },
                { value: "4", label: "Infinix" },
                { value: "5", label: "Oppo" },
                { value: "6", label: "Techno" },
              ]}
              value={selectedOption}
              onChange={handleSelectChange}
            />
          </div>
        </div>
        <div className="row d-flex  justify-content-center align-items-center py-5 ">
          <div className="col-11 col-lg-8 my-3 ">
            <Table data={tableData} />
          </div>
          <div className="col-11 col-lg-4 my-3 d-flex justify-content-between align-items-center flex-column">
            <Card
              title="Create Stunning AI Art"
              content="Create amazing artworks in seconds using the power of Artificial Intelligence, participate in AI Art Challenges, chat with AI Art enthusiasts, and more. Try an art generator now!"
              Image="https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
