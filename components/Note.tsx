import { createElement } from "react";

export default function Note({ icon, children }) {
  return (
    <div className="mb-2 flex items-center rounded-xl text-sm text-blue-500 overflow-hidden">
      {icon && createElement(icon, { className: "w-5 h-4 mr-1" })}
      <div>{children}</div>
    </div>
  );
}
