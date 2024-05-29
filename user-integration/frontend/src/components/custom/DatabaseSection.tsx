import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Form } from "../../hooks/useForm";
import { postChat } from "../../utils/httpUtils";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface DatabaseSectionProps {
  children?: React.ReactNode;
  form: Form<"description" | "prescription">;
}

const DatabaseSection: React.FC<DatabaseSectionProps> = ({ form }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  const searchDatabase = async () => {
    setIsLoading(true);
    try {
      if (!searchTerm)
        throw new Error("Please fill out the search term field");

      const fullPrompt = `I need help for a database query. My query is: ${searchTerm}
      Other relevant information may be, the user description: ${form.values.description}`;

      const response = await postChat(fullPrompt, true);
      setAnswer(response.answer);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-semibold">Therapy Database</h1>
        <p>Ask a question and get a factual answer from the database</p>
      </div>
      <div>
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <Button onClick={() => searchDatabase} className="w-full">
            Search
          </Button>
        )}
      </div>
      <div>
        <Textarea
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Ask a question..."
          className="w-full h-16"
        />
      </div>
      <div className="max-h-48 overflow-scroll">
        <p>{answer}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-2">
        <Button
          onClick={() =>
            form.setValue("description", answer ?? "")
          }
        >
          Copy to description
        </Button>
        <Button
          onClick={() =>
            form.setValue("prescription", answer ?? "")
          }
        >
          Copy to prescription
        </Button>
      </div>
    </div>
  );
};

export default DatabaseSection;