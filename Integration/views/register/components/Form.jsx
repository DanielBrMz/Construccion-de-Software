import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    address: "",
    phone: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with:", form);

    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.status === 200) {
      alert("User created successfully");
      setForm({
        userName: "",
        email: "",
        address: "",
        phone: "",
        age: "",
        gender: "",
      });
    } else {
      alert("Failed to create user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 py-1 px-2"
        />
        <input
          type="text"
          placeholder="Nick Name"
          className="border border-gray-400 py-1 px-2"
        />
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Age"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>
      <div className="mt-5">
        <select
          className="border border-gray-400 py-1 px-2 w-full"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mt-5">
        <button className="w-full bg-purple-500 py-3 text-center text-white">
          Register Now
        </button>
      </div>
    </form>
  );
}

export default Form;
