import { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = {
  monthly: {
    name: "Starter",
    price: "₹7,500",
    benefit: "Pay month-to-month",
    features: [
      "Up to 5 Active Roles per month.",
      "40 Pre-screened Candidates delivered after internal interview and capability checks.",
      "Initial Screening & Shortlisting based on your specific role requirements.",
      "Dedicated Recruiter and  Manager for full-cycle hiring support",
      "Turnaround Time: 2-3 days per role ",
      "Replacement Period: 15 days",
      "Reporting: Regular email updates on candidate progress."
      
    ],
  },

  quarterly: {
    name: "Growth",
    price: "₹20,000",
    benefit: "Pay quaterly-to-quaterly",
    features: [
      "Up to 15 Active Roles at a time.",
      "150 Pre-screened Candidates delivered after internal interview and capability checks ( per quarter )",
      "Initial Screening & Shortlisting based on your specific role requirements.",
      "Dedicated Recruiter and  Manager for full-cycle hiring support.",
      "Turnaround Time: 2-3 days per role.",
      "Replacement Period: 15 days.",
      "Reporting: Detailed weekly performance reports.",
    ],
  },

  yearly: {
    name: "Enterprise",
    price: "₹65,500",
    benefit: "Pay yearly-to-yearly",
    features: [
      "Up to 50 Total Roles (max 15 active at a time).",
      "600 Pre-screened Candidates delivered after internal interview and capability checks. ( Per Year )",
      "Initial Screening & Shortlisting based on your specific role requirements.",
      "Dedicated Recruiter and  Manager for full-cycle hiring support.",
      "Turnaround Time: 2–3 days per role.",
      "Replacement Period: 15 Days",
    ],
  },
};

export default function PricingCard() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const plan = pricingPlans[selectedPlan];

  return (
    <div className=" max-w-[90vw] md:max-w-[60vw] mx-auto  ">
      {/* Switch Buttons */}
      <div className="flex justify-center gap-2 mb-6 bg-gray-800 rounded-xl p-1 ">
        {Object.keys(pricingPlans).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedPlan(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedPlan === key
                ? "bg-purple-500 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {pricingPlans[key].name.charAt(0).toUpperCase() +
              pricingPlans[key].name.slice(1)}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="relative bg-gray-900 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-purple-400 mt-2 capitalize">
          {plan.name}
        </h2>
        <p className="text-gray-400 mb-4">{plan.benefit}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          {/* <span className="text-4xl font-bold">{plan.price}</span> */}
          {/* <span className="text-gray-400">/plan</span> */}
        </div>

        {/* Features */}
        <ul className="items-center ">
          <div className="space-y-3 text-left w-full flex flex-col">

          
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-purple-400" />
              <span>{feature}</span>
            </li>
          ))}
          </div>
        </ul>

        {/* CTA */}
        <Link to={"/contact#contactform"} className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition">
          Get Quotation
        </Link>
      </div>
    </div>
  );
}
