import Age_Form from "./Age_Form";
import Contact_Form from "./Contact_Form";
import Email_Form from "./Email_Form";
import ProductCard from "./ProductCard";
import { UseState } from "./UseState";
import Welcome from "./Welcome";
import Welcome_Props from "./Welcome_Props";

import { useEffect, useState } from "react";

function useNumberStorage(
  key: string,
  initialValue: number
): [number, (value: number) => void] {
  const [value, setValue] = useState<number>(() => {
    const stored = localStorage.getItem(key);

    if (stored !== null) {
      return Number(stored);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, String(value));
  }, [key, value]);

  return [value, setValue];
}


type Settings = {
  language: string;
  notifications: boolean;
};

function useSettingsStorage(
  key: string,
  initialValue: Settings
): [Settings, (value: Settings) => void] {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(settings));
  }, [key, settings]);

  return [settings, setSettings];
}


function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}


function App() {

  const [count, setCount] = useNumberStorage("count", 0);

  const [settings, setSettings] = useSettingsStorage("settings", {
    language: "English",
    notifications: true,
  });


  const handleEmailSubmit = (email: string) => {
    console.log(email);
  };


  const handleAgeSubmit = (age: number) => {
    console.log(age);
  };


  const handleContactSubmit = (data: {
    name: string;
    email: string;
  }) => {
    console.log(data);
  };

  return (
    <>
      <Welcome username="Omar Tood" isPremium={true} />
      <Welcome username="Mahdi iltireh" isPremium={false} />
      <Welcome username="Mc Hamouda" isPremium={true} />

      {/*  ProductCard*/}
      <ProductCard
        name="Laptop"
        price={2000}
        description="Powerful gaming laptop"
      />

      <ProductCard
        name="Smart phone"
        price={1000}
        description="A smartphone is a portable electronic device that combines"
      />

      <ProductCard name="Mouse" price={500} />

      {/* Rebuild Using type */}
      <Welcome_Props username="Asma" isPremium={true} />

      {/* Exercise 8 */}
      <UseState />

      {/* Exercise 9 */}
      <Email_Form onSubmit={handleEmailSubmit} />
      <Age_Form onSubmit={handleAgeSubmit} />
      <Contact_Form onSubmit={handleContactSubmit} />


      {/* Exercise 10 */}
       <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>


       <div>
      <h2>Language: {settings.language}</h2>
      <h2>
        Notifications: {settings.notifications ? "On" : "Off"}
      </h2>

      <button
        onClick={() =>
          setSettings({
            ...settings,
            language: "Somali",
          })
        }
      >
        Change Language
      </button>

      <button
        onClick={() =>
          setSettings({
            ...settings,
            notifications: !settings.notifications,
          })
        }
      >
        Toggle Notifications
      </button>
    </div>
    <div>
      <h2>Language: {settings.language}</h2>
      <h2>
        Notifications: {settings.notifications ? "On" : "Off"}
      </h2>

      <button
        onClick={() =>
          setSettings({
            ...settings,
            language: "French",
          })
        }
      >
        Change Language
      </button>

      <button
        onClick={() =>
          setSettings({
            ...settings,
            notifications: !settings.notifications,
          })
        }
      >
        Toggle Notifications
      </button>
    </div>
    </>
  );
}

export default App;
