import SafeArea from "../components/custom/SafeArea";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
//import { useToast } from "../components/ui/use-toast";
import { useForm } from "../hooks/useForm";
//import { Loader2 } from "lucide-react";
import React from "react";
//import { postUser } from "../utils/httpUtils";
import Select from "../components/ui/select";
import Image from "../assets/authentication.svg";

interface RegisterProps {
  children?: React.ReactNode;
}

const items = [
  {
    label: "Genders",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
      { value: "preferNotToSay", label: "Prefer not to say" },
    ],
  },
];

const Register: React.FC<RegisterProps> = () => {
  //const { toast } = useToast();

  const form = useForm({
    name: "",
    age: "",
    phone: "",
    email: "",
    maritalStatus: "",
    occupation: "",
    educationLevel: "",
    previousDiagnosis: "",
    Gender: "",
  });

  /* const registerUser = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: () => {
      if (!form.values.email || !form.values.name)
        throw new Error("Please fill out all required fields");
      return postUser(form.values);
    },
    onError: (e: Error) => {
      toast({
        title: "Failed to register user",
        description: `Full message: ${e.message}`,
      });
    },
    onSuccess: () => {
      form.setValues({
        email: "",
        bio: "",
        name: "",
        address: "",
        phone: "",
        age: "",
      });
      toast({
        title: "Registered user",
        description: "Successfully registered user",
      });
    },
  }); */

  return (
    <div>
      <SafeArea>
        <div className="px-4 py-12 grid gap-y-10">
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl font-semibold">Register new user</h1>
            <div className="grid grid-cols-2">
              <div className="pr-20">
                <img src={Image} alt="Description of Image" />
              </div>
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Name*"
                    className="input"
                    value={form.values.name}
                    onChange={form.handleKey("name")}
                  />
                  <Input
                    type="number"
                    placeholder="Age"
                    className="input"
                    value={form.values.age}
                    onChange={form.handleKey("age")}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="input"
                    value={form.values.phone}
                    onChange={form.handleKey("phone")}
                  />
                  <Input
                    type="text"
                    placeholder="Marital Status"
                    className="input"
                    value={form.values.maritalStatus}
                    onChange={form.handleKey("maritalStatus")}
                  />
                  <Input
                    type="text"
                    placeholder="Education Level"
                    className="input"
                    value={form.values.educationLevel}
                    onChange={form.handleKey("educationLevel")}
                  />
                  <Input
                    type="text"
                    placeholder="Occupation"
                    className="input"
                    value={form.values.occupation}
                    onChange={form.handleKey("occupation")}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Email*"
                  className="input"
                  value={form.values.email}
                  onChange={form.handleKey("email")}
                />
                <Textarea
                  placeholder="Previous Diagnosis"
                  className="h-32"
                  value={form.values.previousDiagnosis}
                  onChange={form.handleKey("previousDiagnosis")}
                />
                <Select items={items} />
                <Button
                  onClick={() => console.log("register")}
                  disabled={false}
                  className="w-full flex space-x-3 bg-green-600 text-white"
                >
                  <span>Register User</span>
                  {/* {registerUser.isLoading && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )} */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SafeArea>
    </div>
  );
};

export default Register;
