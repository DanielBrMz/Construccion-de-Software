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
          onChange={handleChange}
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          className="border border-gray-400 py-1 px-2 h-12"
        />
        <input
          onChange={handleChange}
          type="text"
          name="userName"
          value={form.userName}
          placeholder="Nick Name"
          className="border border-gray-400 py-1 px-2 h-12"
        />
      </div>
      <div className="mt-5">
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={form.email}
          placeholder="Email"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />
      </div>
      <div className="mt-5">
        <input
          onChange={handleChange}
          type="text"
          name="address"
          value={form.address}
          placeholder="Address"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />
      </div>
      <div className="mt-5">
        <input
          onChange={handleChange}
          type="text"
          name="phone"
          value={form.phone}
          placeholder="Phone Number"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />
      </div>
      <div className="mt-5">
        <input
          onChange={handleChange}
          type="text"
          name="age"
          value={form.age}
          placeholder="Age"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />
      </div>
      <div className="mt-5">
        <select
          className="border border-gray-400 py-1 px-2 w-full h-12"
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
