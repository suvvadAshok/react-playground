import React from "react";

export function NumberAnimation() {
  const [state, setState] = React.useState<number>(0);

  return (
    <div className="w-full h-full bg-slate-400  flex items-start justify-center text-2xl">
      <div className="mt-40 flex items-start border gap-4 bg-red-400 ">
        <button className="border" onClick={() => setState(state + 1)}>
          click
        </button>
        <div
          className=" bg-green-200 flex flex-col"
          style={{
            transform: `translateY(-${state * 32}px)`,
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
            <span key={index} className="h-8 border border-red-100">
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
