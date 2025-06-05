import React, { useState } from "react";

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [active, setActive] = useState(null);
  const pricingCards = [
    {
      name: "Starter",
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "500 MAUs",
        "3 Projects",
        "Unlimited guides",
        "Unlimited flows",
        "Unlimted branded themes",
        "Email support",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "All starter features, plus:",
        "Unlimited projects",
        "Unlimited fully customizable themes",
        "A dedicated Customer Success Manager",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: "Let's Talk!",
      features: [
        "All pro features",
        "Unlimited MAUs",
        "Dedicated Environment",
        "Enterprise account administration",
        "Premimum support and services",
      ],
    },
  ];
  return (
    <section className="bg-sky-100 p-6">
      <div className="bg-black/85 flex flex-col items-center justify-center gap-10">
        <div className="bg-rose-800 px-6 py-2 rounded-b-xs text-center">
          <h3 className="text-gray-50/40 font-semi-bold text-sm">
            Your Current Plan
          </h3>
          <h1 className="text-gray-100 font-bold flex items-center gap-1">
            Starter Trial <span>.</span>500MAUs
          </h1>
        </div>
        <div className="text-center">
          <h1 className="text-gray-100 font-bold py-2">Choose a plan</h1>
          <div className="flex items-center justify-center gap-3 text-gray-50">
            <span className="text-xs">Billed monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`${
                isAnnual ? "bg-rose-800" : "bg-gray-300"
              } relative inline-flex w-11 h-6 rounded-full items-center cursor-pointer`}
            >
              <span
                className={`${
                  isAnnual ? "translate-x-5" : "translate-x-1"
                } absolute top-1 left-1 w-4 h-4 bg-white rounded-full transform transition duration-300`}
              ></span>
            </button>
            <span className="text-xs">Billed Annually</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pricingCards.map((plan, id) => (
            <div
              key={id}
              className="bg-[#22272e] max-w-80 text-gray-300 px-6 py-2 flex flex-col gap-6 rounded-md"
            >
              <h1 className="text-center text-lg font-semibold">{plan.name}</h1>
              <p className="text-center text-xl font-bold">
                {plan.name === "Enterprise"
                  ? plan.monthlyPrice
                  : `$${isAnnual ? plan.monthlyPrice : plan.annualPrice}`}
                {plan.name !== "Enterprise" && (
                  <span className="text-sm">
                    {" "}
                    /{isAnnual ? "year" : "monthly"}
                  </span>
                )}
              </p>

              {plan.name === "Pro" && (
                <div className="flex flex-col gap-1">
                  <button className="flex gap-4 border border-gray-300/40 px-6 py-2 w-56">
                    2500 MAUs
                    <svg
                      className="-mr-1 size-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="text-xs text-rose-800">
                    Monthly active users
                  </span>
                </div>
              )}
              <ul className="mt-4 flex-1 list-disc list-inside marker:text-rose-800">
                {plan.features.map((feature, id) => (
                  <li key={id}>{feature}</li>
                ))}
              </ul>
              <button
                className={`${
                  active === plan.name
                    ? "bg-rose-700"
                    : "border border-rose-800/30"
                } px-8 py-2 rounded-xs mx-auto mb-5 text-sm`}
                onClick={() => setActive(plan.name)}
              >
                {plan.name === "Enterprise" ? "Contact Us" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
