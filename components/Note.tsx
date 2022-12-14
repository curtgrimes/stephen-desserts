import { createElement } from "react";

export default function Note({ icon, children }) {
  return (
    <div className="mb-2 flex items-center overflow-hidden rounded-xl text-sm text-blue-500">
      {icon && createElement(icon, { className: "w-5 h-4 mr-1" })}
      <div>{children}</div>
    </div>
  );
}
