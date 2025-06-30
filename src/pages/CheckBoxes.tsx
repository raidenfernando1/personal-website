import { useEffect, useState } from "react";

const CHECKBOX_COUNT = 600;

const CheckBoxes = () => {
  const [checks, setChecks] = useState<boolean[]>([]);

  useEffect(() => {
    fetch("/api/get-checkboxes")
      .then((res) => res.json())
      .then((data) => {
        const binary = data.data || "";
        const parsed = binary
          .padStart(CHECKBOX_COUNT, "0")
          .split("")
          .map((char: string) => char === "1");
        setChecks(parsed);
      });
  }, []);

  const toggle = (index: number) => {
    setChecks((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      saveToKV(copy);
      return copy;
    });
  };

  const saveToKV = (arr: boolean[]) => {
    const binary = arr.map((x) => (x ? "1" : "0")).join("");
    fetch("/api/set-checkboxes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: binary }),
    });
  };

  if (checks.length === 0) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-[repeat(40,minmax(0,1fr))] gap-1 my-12">
      {checks.map((checked, i) => (
        <input
          key={i}
          type="checkbox"
          checked={checked}
          onChange={() => toggle(i)}
          className="appearance-none border border-gray-500 checked:bg-[var(--text-color)] w-full h-full aspect-square"
        />
      ))}
    </div>
  );
};

export default CheckBoxes;
