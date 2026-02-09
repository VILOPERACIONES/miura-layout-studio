import { Megaphone, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      {/* Quick stats – will show real data once backend is connected */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total promociones", icon: Megaphone, value: "—" },
          { label: "Activas", icon: Eye, value: "—" },
          { label: "Inactivas", icon: EyeOff, value: "—" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border bg-card p-5 space-y-2"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <s.icon className="h-4 w-4" />
              <span className="text-sm">{s.label}</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <Link to="/admin/promotions">
        <Button>Ir a Promociones</Button>
      </Link>
    </div>
  );
}
