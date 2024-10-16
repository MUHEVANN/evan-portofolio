"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 6,
    text: "Months of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies learned",
  },
  {
    num: 483,
    text: "Code Commits",
  },
];

function Stats() {
  return (
    <section className="pb-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex-1 flex items-center justify-center gap-4"
          >
            <CountUp
              end={item.num}
              duration={3}
              delay={1}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p
              className={`${
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
