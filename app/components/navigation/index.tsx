"use client";
import { useState } from "react";
import Navbar from "./navbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
    </div>
  );
};

export default Navigation;