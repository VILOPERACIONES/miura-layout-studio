import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import type { Promotion } from "@/types/promotion";
import { promotionsService } from "@/services/promotions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  Loader2,
  Search,
  Inbox,
} from "lucide-react";

export default function PromotionsList() {
  const { toast } = useToast();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Promotion | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Filters
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const fetchPromotions = useCallback(async () => {
    setLoading(true);
    try {
      const filters: Record<string, unknown> = {};
      if (statusFilter === "active") filters.active = true;
      if (statusFilter === "inactive") filters.active = false;
      if (typeFilter !== "all") filters.type = typeFilter;
      const data = await promotionsService.getAll(
        filters as Parameters<typeof promotionsService.getAll>[0]
      );
      setPromotions(data);
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudieron cargar las promociones.",
      });
    } finally {
      setLoading(false);
    }
  }, [statusFilter, typeFilter, toast]);

  useEffect(() => {
    fetchPromotions();
  }, [fetchPromotions]);

  // Client-side title search
  const filtered = promotions.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = async (promo: Promotion) => {
    setTogglingId(promo.id);
    try {
      const updated = await promotionsService.toggle(promo.id, !promo.is_active);
      setPromotions((prev) =>
        prev.map((p) => (p.id === updated.id ? updated : p))
      );
      toast({
        title: updated.is_active ? "Promoción activada" : "Promoción desactivada",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo cambiar el estado.",
      });
    } finally {
      setTogglingId(null);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await promotionsService.delete(deleteTarget.id);
      setPromotions((prev) => prev.filter((p) => p.id !== deleteTarget.id));
      toast({ title: "Promoción eliminada" });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo eliminar la promoción.",
      });
    } finally {
      setDeleting(false);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-foreground">Promociones</h1>
        <Link to="/admin/promotions/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nueva Promoción
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por título…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            maxLength={100}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Activas</SelectItem>
            <SelectItem value="inactive">Inactivas</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="promo">Promo</SelectItem>
            <SelectItem value="evento">Evento</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-3">
          <Inbox className="h-12 w-12" />
          <p className="text-lg font-medium">No hay promociones</p>
          <Link to="/admin/promotions/new">
            <Button variant="outline">Crear primera promoción</Button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Imagen
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Título
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden sm:table-cell">
                  Tipo
                </th>
                <th className="px-4 py-3 text-center font-medium text-muted-foreground">
                  Estado
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                  Creación
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((promo) => (
                <tr
                  key={promo.id}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <img
                      src={promo.image_desktop_url}
                      alt={promo.title}
                      className="h-10 w-16 rounded object-cover bg-muted"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground max-w-[200px] truncate">
                    {promo.title}
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium capitalize text-secondary-foreground">
                      {promo.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Switch
                      checked={promo.is_active}
                      disabled={togglingId === promo.id}
                      onCheckedChange={() => handleToggle(promo)}
                    />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell whitespace-nowrap">
                    {new Date(promo.created_at).toLocaleDateString("es-MX")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link to={`/admin/promotions/${promo.id}`}>
                        <Button variant="ghost" size="icon" title="Ver detalle">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to={`/admin/promotions/${promo.id}/edit`}>
                        <Button variant="ghost" size="icon" title="Editar">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Eliminar"
                        onClick={() => setDeleteTarget(promo)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete dialog */}
      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar promoción?</AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará permanentemente "{deleteTarget?.title}". Esta acción
              no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
