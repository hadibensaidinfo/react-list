import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
type AddeProps = {
  name: string;
  age: Number;
};

const initialState: AddeProps = {
  name: "",
  age: 0,
};
function Add() {
  const [listUser, setListUser] = useState<AddeProps[]>([]);
  const [user, setUser] = useState<AddeProps>(initialState);
  const [open, setOpen] = useState(false);

  const HandleChange = () => {
    setOpen(!open);
  };
  const handleChangeInputEvent = (event: any) => {
    setUser({ name: event.target.value, age: 0 });
  };

  const HandleAddUser = (e: any) => {
    setListUser((previewState: any) => [...previewState, user]);
  };

  return (
    <div>
      <Button onClick={HandleChange}>Add</Button>
      <Modal isOpen={open} toggle={HandleChange}>
        <ModalHeader toggle={HandleChange}>Add</ModalHeader>
        <ModalBody>
          <input
            type="text"
            placeholder="Add Name"
            onChange={handleChangeInputEvent}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={HandleAddUser}>Ajouter </Button>
        </ModalFooter>
      </Modal>
      {/* <h1>{user}</h1> */}
      {listUser?.map((item: any) => (
        <ul>
          <li> {item.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Add;
