"use client";
import { useState } from "react";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-[24px] lg:gap-[32px]"
    >
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
          <span className="text-accent font-bold ml-[4px]">*</span>
        </label>
        <input
          id="name"
          required
          className="form-input"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label className="form-label">
          Email
          <span className="text-accent font-bold ml-[4px]">*</span>
        </label>
        <input
          id="email"
          required
          className="form-input"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="col-span-2 form-group">
        <label className="form-label">
          Budget
          <span className="text-accent font-bold ml-[4px]">*</span>
        </label>
        <select
          id="budget"
          required
          className="form-select"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
        >
          <option value="" disabled defaultValue=""></option>
          <option value="3000">3,000 USD - 10,000 USD</option>
          <option value="10,000">10,000 USD - 30,000 USD</option>
          <option value="30,000">30,000 USD + </option>
        </select>
      </div>
      <div className="form-group col-span-2">
        <label className="form-label">Message</label>
        <textarea
          id="message"
          className="form-textarea"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <button
        type="submit"
        className="bg-accent/5 w-fit py-[12px] px-[16px] lg:py-[10px] lg:px-[16px] text-accent cursor-pointer relative group text-[13px] md:text-sm lg:text-[15px]]"
      >
        <div className="absolute h-full w-0 bg-accent/10 group-hover:w-full transition-all duration-300 top-0 left-0" />
        Send Message
      </button>
    </form>
  );
};

export default FooterForm;
