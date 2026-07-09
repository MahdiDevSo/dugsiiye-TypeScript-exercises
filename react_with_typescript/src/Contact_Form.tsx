import { useState } from "react";

type Contact = {
  name: string;
  email: string;
};
type ContactFormProps = {
  onSubmit: (data: Contact) => void;
};

const Contact_Form = ({ onSubmit }: ContactFormProps) => {
  const [form, setForm] = useState<Contact>({
    name: "",
    email: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm({
              ...form,
              email: event.target.value,
            })
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact_Form;
