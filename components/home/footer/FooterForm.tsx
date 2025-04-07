"use client";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
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
          disabled={status === "success"}
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
          disabled={status === "success"}
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
          disabled={status === "success"}
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
          disabled={status === "success"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className={`flex items-center justify-center gap-2 w-fit py-[12px] px-[16px] lg:py-[10px] lg:px-[16px] text-[13px] md:text-sm lg:text-[15px] relative group bg-accent/5 text-accent ${
          status === "submitting" || status === "success"
            ? "cursor-default"
            : "cursor-pointer"
        }`}
      >
        {status !== "submitting" && status !== "success" && (
          <div className="absolute h-full w-0 bg-accent/10 group-hover:w-full transition-all duration-300 top-0 left-0" />
        )}

        {status === "submitting" && (
          <AiOutlineLoading3Quarters className="animate-spin " />
        )}
        {status === "success" && <FiCheckCircle className="" />}
        {status === "error" && <BiErrorCircle className="" />}
        <span>
          {status === "submitting"
            ? "Sending..."
            : status === "success"
              ? "Sent"
              : status === "error"
                ? "Error"
                : "Send Message"}
        </span>
      </button>
    </form>
  );
};

export default FooterForm;
