import { useState } from "react";
import api from "../API/axios";

export default function SignUP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
}
