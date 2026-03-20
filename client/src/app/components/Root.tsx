import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div className="min-h-screen bg-[#fff9f0]">
      <Outlet />
    </div>
  );
}
