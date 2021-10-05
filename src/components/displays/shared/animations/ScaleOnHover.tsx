import React from 'react';

type ScaleOnHoverProps = {
  children: React.ReactNode;
};

export default function ScaleOnHover({ children }: ScaleOnHoverProps) {
  return (
    <div className="hover:scale-125 transition duration-500">{children}</div>
  );
}
