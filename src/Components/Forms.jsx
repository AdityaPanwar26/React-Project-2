import React from "react";

const Forms = () => {
  return (
    <div className="Hero-section">
      <div className="Form-section">
        <form>
          <label>
            Name:
            <input type="text" />
          </label>

          <label>
            Email:
            <input type="text" />
          </label>

          <label>
            Text:
            <input type="text" />
          </label>
        </form>
        <button type="submit">Submit</button>
      </div>

    </div>
  );
};

export default Forms;
