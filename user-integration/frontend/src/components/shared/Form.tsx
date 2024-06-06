import { ChangeEvent, FormEvent, useState } from "react";

interface FormState {
  name: string;
  email: string;
  age: string;
  gender: string;
  maritalStatus: string;
  occupation: string;
  educationLevel: string;
  previousDiagnosis: string;
  medication: string;
  password: string;
}

function Form() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    educationLevel: "",
    previousDiagnosis: "",
    medication: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        name: "",
        email: "",
        age: "",
        gender: "",
        maritalStatus: "",
        occupation: "",
        educationLevel: "",
        previousDiagnosis: "",
        medication: "",
        password: "",
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
          name="age"
          value={form.age}
          placeholder="Age"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />

        <input
          onChange={handleChange}
          type="text"
          name="maritalStatus"
          value={form.maritalStatus}
          placeholder="Marital Status"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />
        <input
          onChange={handleChange}
          type="text"
          name="occupation"
          value={form.occupation}
          placeholder="Occupation"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />

        <input
          onChange={handleChange}
          type="text"
          name="educationLevel"
          value={form.educationLevel}
          placeholder="Education Level"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />

        <input
          onChange={handleChange}
          type="text"
          name="previousDiagnosis"
          value={form.previousDiagnosis}
          placeholder="Previous Diagnosis"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />
        <input
          onChange={handleChange}
          type="text"
          name="medication"
          value={form.medication}
          placeholder="Medication"
          className="border border-gray-400 py-1 px-2 w-full h-12"
        />
      </div>
      <div className="mt-5"></div>
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
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
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
      <div className="mt-5">
        <button className="w-full bg-gray-100 py-3 text-center text-black">
          Login
        </button>
      </div>
    </form>
  );
}

export default Form;
