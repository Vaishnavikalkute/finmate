export default function Navbar() {
    return (
      <nav className="flex items-center justify-between p-4 bg-blue-900 text-white shadow">
        <div className="text-2xl font-bold">FinMate 💰</div>
        <div className="space-x-4">
          <button className="hover:underline">Menu</button>
          <button className="hover:underline">Profile</button>
        </div>
      </nav>
    );
  }
  