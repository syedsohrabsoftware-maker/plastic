"use client";

import { useState } from "react";
import { Phone, MapPin, CalendarDays, Recycle } from "lucide-react";

export default function PickupForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    email: "",
    date: "",
    time: "",
    items: [] as string[],
  });

  const steps = [
    { label: "Contact", icon: <Phone size={16} /> },
    { label: "Address", icon: <MapPin size={16} /> },
    { label: "Schedule", icon: <CalendarDays size={16} /> },
    { label: "Items", icon: <Recycle size={16} /> },
  ];

  const submitForm = () => {
    if (!form.name || form.mobile.length < 10) {
      alert("Please enter valid Name & Mobile");
      return;
    }

    const message = `
New Scrap Pickup Request

Name: ${form.name}
Mobile: ${form.mobile}

Address: ${form.address}
City: ${form.city}
Pincode: ${form.pincode}

Pickup Date: ${form.date}
Time: ${form.time}

Items: ${form.items.join(", ")}
`;

    const phone = "919813124320";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="pickup"
      className="relative max-w-5xl mx-auto -mt-28 bg-[#dff3ef] rounded-[32px] shadow-xl px-6 md:px-12 py-10 z-20"
    >
      {/* STEPS */}
      <div className="flex justify-between mb-12">
        {steps.map((s, i) => (
          <div key={s.label} className="flex-1 text-center">
            <div
              className={`w-9 h-9 mx-auto rounded-full flex items-center justify-center border
              ${
                step === i + 1
                  ? "bg-[#0F766E] text-white border-[#0F766E]"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {s.icon}
            </div>
            <p
              className={`mt-2 text-xs ${
                step === i + 1 ? "text-[#0F766E]" : "text-gray-400"
              }`}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-8 animate-fade">
          <FloatingInput label="Your Name" name="name" form={form} setForm={setForm} />
          <FloatingInput label="Mobile Number" name="mobile" form={form} setForm={setForm} />
          <Buttons next={() => setStep(2)} />
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="grid md:grid-cols-2 gap-8 animate-fade">
          <FloatingInput label="Full Address" name="address" form={form} setForm={setForm} />
          <FloatingSelect
            label="City"
            name="city"
            form={form}
            setForm={setForm}
            options={["Bhiwadi", "Alwar", "Tapukra", "Khushkhera"]}
          />
          <FloatingInput label="Pincode" name="pincode" form={form} setForm={setForm} />
          <FloatingInput label="Email (Optional)" name="email" form={form} setForm={setForm} />
          <Buttons back={() => setStep(1)} next={() => setStep(3)} />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="grid md:grid-cols-2 gap-8 animate-fade">
          <FloatingInput type="date" label="Pickup Date" name="date" form={form} setForm={setForm} />
          <FloatingInput type="time" label="Preferred Time" name="time" form={form} setForm={setForm} />
          <Buttons back={() => setStep(2)} next={() => setStep(4)} />
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="animate-fade">
          <p className="text-sm text-gray-600 mb-4">
            Select the scrap items you want to sell
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Plastic Scrap",
              "Industrial Plastic",
              "Plastic Drums",
              "Plastic Bags",
              "Injection Scrap",
              "Mixed Plastic",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border hover:border-[#0F766E] cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="accent-[#0F766E]"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      items: e.target.checked
                        ? [...form.items, item]
                        : form.items.filter((i) => i !== item),
                    })
                  }
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={() => setStep(3)}
              className="text-sm text-gray-500"
            >
              ← Back
            </button>

            <button
              onClick={submitForm}
              className="px-8 py-3 rounded-full bg-[#0F766E] text-white text-sm font-medium hover:bg-[#115E59] transition"
            >
              Submit Pickup Request
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ===== FLOATING INPUTS ===== */

function FloatingInput({ label, name, form, setForm, type = "text" }: any) {
  return (
    <div className="relative">
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="peer w-full px-4 pt-5 pb-2 rounded-xl border bg-white focus:outline-none focus:border-[#0F766E]"
        placeholder=" "
      />
      <label className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#0F766E]">
        {label}
      </label>
    </div>
  );
}

function FloatingSelect({ label, name, form, setForm, options }: any) {
  return (
    <div className="relative">
      <select
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="peer w-full px-4 pt-5 pb-2 rounded-xl border bg-white focus:outline-none focus:border-[#0F766E]"
      >
        <option value="" />
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <label className="absolute left-4 top-2 text-xs text-gray-500">
        {label}
      </label>
    </div>
  );
}

function Buttons({ back, next }: any) {
  return (
    <div className="col-span-full flex justify-between pt-4">
      {back ? (
        <button onClick={back} className="text-sm text-gray-500">
          ← Back
        </button>
      ) : (
        <div />
      )}
      <button
        onClick={next}
        className="px-7 py-3 rounded-full bg-[#0F766E] text-white text-sm font-medium"
      >
        Continue →
      </button>
    </div>
  );
}
