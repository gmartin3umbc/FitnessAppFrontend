import React from "react";

const SearchBox = (props) => {
  const handleChange = (e) => {
    props.callBack(e.target.value);
  };

  return (
    <div>
      <label className="block text-md font-normal text-gray-900">
        Search by exercise name
      </label>
      <div className="relative mt-2 rounded-md shadow-lg">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="Ex: Chest Press"
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") props.onKeyDownFunc();
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
