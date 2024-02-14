import { FC, useState } from "react";
import { SelectBaseProps } from "./types";

const SelectBase: FC<SelectBaseProps> = ({
  options,
  label,
  onChange,
  selectedOption,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <label className="text-xs text-white mb-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          className="w-full border border-pink bg-purple-light text-white p-3 text-left text-sm rounded-lg focus:outline-pink"
          onClick={() => setIsSelectOpen((prev) => !prev)}
        >
          {selectedOption}
        </button>
        {isSelectOpen && (
          <div className="absolute top-full left-0 right-0 p-2 bg-purple rounded-b-lg">
            <ul className="w-full">
              {options.map(({ value, label: optionLabel }) => (
                <li key={value} className="mb-2 last:mb-0 w-full">
                  <button
                    type="button"
                    className="text-white text-sm py-2 px-4 bg-purple hover:bg-pink w-full text-left transition-colors rounded-lg"
                    onClick={() => {
                      onChange(value);
                      setIsSelectOpen(false);
                    }}
                  >
                    {optionLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBase;
