import { ReactNode } from 'react';

export default function LocationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="location-layout">
      {children}
    </div>
  );
}
