import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { promotionsService } from "@/services/promotions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Loader2, Upload, X } from "lucide-react";
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
/* ------------------------------------------------------------------ */
/*  Validation schema                                                  */
/* ------------------------------------------------------------------ */

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const fileSchema = z
  .instanceof(File)
  .refine((f) => f.size <= MAX_FILE_SIZE, "Máximo 5 MB")
  .refine((f) => ACCEPTED_TYPES.includes(f.type), "Formato: JPG, PNG o WEBP");

// Esquema base compartido
const baseFields = {
  type: z.enum(["promo", "evento"]),
  title: z
    .string()
    .trim()
    .min(1, "Título requerido")
    .max(100, "Máximo 100 caracteres"),
  link: z
    .string()
    .trim()
    .optional()
    .transform((val) => (val === "" ? undefined : val))
    .refine(
      (val) => !val || z.string().url().safeParse(val).success,
      "URL inválida"
    ),
  is_active: z.boolean(),
};

// Schema para crear (imágenes requeridas)
const createSchema = z.object({
  ...baseFields,
  image_desktop: fileSchema,
  image_mobile: fileSchema,
});

// Schema para editar (imágenes opcionales)
const editSchema = z.object({
  ...baseFields,
  image_desktop: fileSchema.optional(),
  image_mobile: fileSchema.optional(),
});

type FormValues = z.infer<typeof editSchema>;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PromotionForm() {
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [loadingPromo, setLoadingPromo] = useState(isEdit);

  // Preview URLs
  const [desktopPreview, setDesktopPreview] = useState<string | null>(null);
  const [mobilePreview, setMobilePreview] = useState<string | null>(null);
  const desktopRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingValues, setPendingValues] = useState<FormValues | null>(null);


  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(isEdit ? editSchema : createSchema),
    defaultValues: {
      type: "promo",
      title: "",
      link: "",
      is_active: true,
    },
  });

  const watchType = watch("type");

  // Load existing promotion when editing
  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const promo = await promotionsService.getById(id);
        console.log(" Loaded promotion:", promo); // Debug

        setValue("type", promo.type);
        setValue("title", promo.title);
        setValue("link", promo.link || "");
        setValue("is_active", Boolean(promo.is_active));
        setDesktopPreview(promo.image_desktop_url);
        setMobilePreview(promo.image_mobile_url);
      } catch (error) {
        console.error(" Error loading promotion:", error); // Debug
        toast({
          variant: "destructive",
          title: "Error",
          description: "No se pudo cargar la promoción.",
        });
        navigate("/admin/promotions");
      } finally {
        setLoadingPromo(false);
      }
    })();
  }, [id, setValue, navigate, toast]);

  const onFileChange = (
    field: "image_desktop" | "image_mobile",
    setPreview: (url: string | null) => void
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setValue(field, file, { shouldValidate: true });
      setPreview(URL.createObjectURL(file));
    };
  };

  const clearFile = (
    field: "image_desktop" | "image_mobile",
    setPreview: (url: string | null) => void,
    ref: React.RefObject<HTMLInputElement | null>
  ) => {
    setValue(field, undefined, { shouldValidate: true });
    setPreview(null);
    if (ref.current) ref.current.value = "";
  };

  const handleConfirmSubmit = async () => {
    if (!pendingValues) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("type", pendingValues.type);
      fd.append("title", pendingValues.title);
      fd.append("link", pendingValues.link || "");
      fd.append("is_active", String(pendingValues.is_active));

      if (pendingValues.image_desktop) {
        fd.append("image_desktop", pendingValues.image_desktop);
      }
      if (pendingValues.image_mobile) {
        fd.append("image_mobile", pendingValues.image_mobile);
      }

      if (isEdit && id) {
        await promotionsService.update(id, fd);
        toast({ title: "Promoción actualizada" });
      } else {
        await promotionsService.create(fd);
        toast({ title: "Promoción creada" });
      }

      navigate("/admin/promotions");
    } catch (err: unknown) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          err instanceof Error ? err.message : "No se pudo guardar.",
      });
    } finally {
      setSubmitting(false);
      setConfirmOpen(false);
      setPendingValues(null);
    }
  };


  if (loadingPromo) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {isEdit ? "Editar Promoción" : "Nueva Promoción"}
      </h1>

      <form
        onSubmit={handleSubmit((values) => {
          setPendingValues(values);
          setConfirmOpen(true);
        })}
        className="space-y-6"
      >

        {/* Type */}
        <fieldset className="space-y-2">
          <Label>Tipo de contenido</Label>
          <div className="flex gap-4">
            {(["promo", "evento"] as const).map((t) => (
              <label
                key={t}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${watchType === t
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border text-muted-foreground hover:bg-muted/50"
                  }`}
              >
                <input
                  type="radio"
                  value={t}
                  {...register("type")}
                  className="sr-only"
                />
                {t === "promo" ? "Promo" : "Evento"}
              </label>
            ))}
          </div>
          {errors.type && (
            <p className="text-sm text-destructive">{errors.type.message}</p>
          )}
        </fieldset>

        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            placeholder="Ej: Promoción de Verano"
            {...register("title")}
            maxLength={100}
            disabled={submitting}
          />
          {errors.title && (
            <p className="text-sm text-destructive">{errors.title.message}</p>
          )}
        </div>

        {/* Link */}
        <div className="space-y-2">
          <Label htmlFor="link">Enlace (opcional)</Label>
          <Input
            id="link"
            type="text"
            placeholder="https://…"
            {...register("link")}
            disabled={submitting}
          />
          {errors.link && (
            <p className="text-sm text-destructive">{errors.link.message}</p>
          )}
        </div>

        {/* Images */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Desktop image */}
          <div className="space-y-2">
            <Label>Imagen Desktop / Monitor</Label>
            {desktopPreview ? (
              <div className="relative">
                <img
                  src={desktopPreview}
                  alt="Desktop preview"
                  className="w-full rounded-md border border-border object-cover aspect-video bg-muted"
                />
                <button
                  type="button"
                  onClick={() =>
                    clearFile("image_desktop", setDesktopPreview, desktopRef)
                  }
                  className="absolute top-2 right-2 rounded-full bg-background/80 p-1 hover:bg-background"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => desktopRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-border py-8 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                <Upload className="h-6 w-6" />
                <span className="text-sm">Subir imagen desktop</span>
                <span className="text-xs">JPG, PNG o WEBP · Máx 5 MB</span>
              </button>
            )}
            <input
              ref={desktopRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={onFileChange("image_desktop", setDesktopPreview)}
            />
            {errors.image_desktop && (
              <p className="text-sm text-destructive">
                {errors.image_desktop.message as string}
              </p>
            )}
          </div>

          {/* Mobile image */}
          <div className="space-y-2">
            <Label>Imagen Mobile</Label>
            {mobilePreview ? (
              <div className="relative">
                <img
                  src={mobilePreview}
                  alt="Mobile preview"
                  className="w-full rounded-md border border-border object-cover aspect-[9/16] max-h-[200px] bg-muted"
                />
                <button
                  type="button"
                  onClick={() =>
                    clearFile("image_mobile", setMobilePreview, mobileRef)
                  }
                  className="absolute top-2 right-2 rounded-full bg-background/80 p-1 hover:bg-background"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => mobileRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-border py-8 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                <Upload className="h-6 w-6" />
                <span className="text-sm">Subir imagen mobile</span>
                <span className="text-xs">JPG, PNG o WEBP · Máx 2 MB</span>
              </button>
            )}
            <input
              ref={mobileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={onFileChange("image_mobile", setMobilePreview)}
            />
            {errors.image_mobile && (
              <p className="text-sm text-destructive">
                {errors.image_mobile.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Active switch */}
        <div className="flex items-center gap-3">
          <Controller
            name="is_active"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                id="is_active"
              />
            )}
          />
          <Label htmlFor="is_active">Promoción activa</Label>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button type="submit" disabled={submitting}>
            {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEdit ? "Actualizar" : "Guardar"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/promotions")}
            disabled={submitting}
          >
            Cancelar
          </Button>
        </div>
      </form>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isEdit ? "¿Actualizar promoción?" : "¿Crear promoción?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {isEdit
                ? "Los cambios se guardarán y reemplazarán la información actual."
                : "La promoción se creará y quedará disponible según su estado."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={submitting}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmSubmit} disabled={submitting}>
              {submitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isEdit ? "Actualizar" : "Crear"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}