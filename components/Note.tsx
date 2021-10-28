import { createElement } from "react";

export default function Note({ icon, children }) {
  return (
    <div className="mb-2 flex items-center rounded-xl text-sm text-blue-500 overflow-hidden">
      {icon && createElement(icon, { className: "w-4 h-4 mr-2" })}
      <div>{children}</div>
    </div>
  );
}
