import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { Promotion } from "@/types/promotion";
import { promotionsService } from "@/services/promotions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, ExternalLink } from "lucide-react";

export default function PromotionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [promo, setPromo] = useState<Promotion | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await promotionsService.getById(id);
        setPromo(data);
      } catch {
        toast({
          variant: "destructive",
          title: "Error",
          description: "No se encontró la promoción.",
        });
        navigate("/admin/promotions");
      } finally {
        setLoading(false);
      }
    })();
  }, [id, navigate, toast]);

  if (loading || !promo) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Back */}
      <button
        onClick={() => navigate("/admin/promotions")}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a promociones
      </button>

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-foreground">{promo.title}</h1>
        <Link to={`/admin/promotions/${promo.id}/edit`}>
          <Button>Editar</Button>
        </Link>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 font-medium capitalize text-secondary-foreground">
          {promo.type}
        </span>
        <span
          className={`inline-block rounded-full px-3 py-1 font-medium ${
            promo.is_active
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {promo.is_active ? "Activa" : "Inactiva"}
        </span>
      </div>

      {promo.link && (
        <a
          href={promo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary underline hover:opacity-80"
        >
          {promo.link}
          <ExternalLink className="h-3 w-3" />
        </a>
      )}

      {/* Images */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Imagen Desktop / Monitor
          </p>
          <img
            src={promo.image_desktop}
            alt={`${promo.title} - desktop`}
            className="w-full rounded-lg border border-border object-cover aspect-video bg-muted"
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Imagen Mobile
          </p>
          <img
            src={promo.image_mobile}
            alt={`${promo.title} - mobile`}
            className="w-full rounded-lg border border-border object-cover aspect-[9/16] max-h-[300px] bg-muted"
          />
        </div>
      </div>

      {/* Dates */}
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-border pt-4">
        <div>
          <span className="font-medium">Creación:</span>{" "}
          {new Date(promo.created_at).toLocaleString("es-MX")}
        </div>
        <div>
          <span className="font-medium">Última actualización:</span>{" "}
          {new Date(promo.updated_at).toLocaleString("es-MX")}
        </div>
      </div>
    </div>
  );
}
