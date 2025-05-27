import { BorderRight } from "@mui/icons-material";

type NavItemProps = {
  icon: string;
  label: string;
};

function NavItem({ icon, label }: NavItemProps) {
  return (
    <button className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded">
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default function Sidebar() {
  return (
    <div className="h-screen bg-white flex flex-col p-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl font-bold">🧠</div>
        <div className="w-6 h-6 border rounded"></div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-sm text-gray-700">
        <NavItem icon="📝" label="New chat" />
        <NavItem icon="🔍" label="Search chats" />
        <NavItem icon="📚" label="Library" />
        <NavItem icon="🔢" label="GPTs" />
        <NavItem icon="🎥" label="Sora" />
      </nav>

      {/* Recent activity */}
      <div className="mt-8">
        <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-2">
          Today
        </h3>
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>{" "}
        <button className="text-sm text-blue-600 hover:underline">
          Fixing Box Height Syntax
        </button>
      </div>
    </div>
  );
}
