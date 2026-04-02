import React, { useState } from 'react';
import { InstagramButton } from './ui/isntagram-button';
import { toast } from 'sonner';


interface FormData {
  name: string;
  email: string;
  message: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://admin.miurahospitality.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar');
      toast.success("Mensaje enviado correctamente");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Error al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="
      w-full
      max-w-[956px]
      mx-auto
      px-4
      "
    >
      <div className="grid grid-cols-2 gap-[30px] mb-[25px] max-sm:grid-cols-1 max-sm:gap-[15px]">
        <div className="
          w-full
          h-[71px]
          relative
          rounded-xl
          border-2
          border-solid
          border-[rgba(217,217,217,0.74)]
          md:h-[60px]
          sm:h-[50px]
        ">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nombre"
            className="
              w-full h-full
              bg-transparent
              text-white
              text-left
              font-arial
              text-base
              font-normal
              px-7 py-6
              rounded-xl border-none outline-none
              placeholder-white
            "
            aria-label="Nombre"
          />
          {errors.name && (
            <span
              className="
                absolute-bottom-6
                left-0
                font-arial
                font-normal
                text-base
                text-red-400
              "
            >
              {errors.name}
            </span>
          )}
        </div>

        <div className="
          w-full
          h-[71px]
          relative
          rounded-xl
          border-2
          border-solid
          border-[rgba(217,217,217,0.74)]
          md:h-[60px]
          sm:h-[50px]
        ">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Correo"
            className="
              w-full h-full
              bg-transparent
              text-white
              text-left
              text-base
              font-arial
              font-normal
              px-7 py-6
              rounded-xl border-none outline-none
              placeholder-white
            "
            aria-label="Correo electrónico"
          />
          {errors.email && (
            <span
              className="
                absolute
                -bottom-6
                left-0
                font-arial
                font-normal
                text-base
                text-red-400
              "
            >
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="
        w-full
        h-[173px]
        relative
        rounded-xl
        border-2
        border-solid
        border-[rgba(217,217,217,0.74)]
        md:h-[140px]
        sm:h-[100px]
        mb-8
      ">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Mensaje"
          className="
            w-full h-full
            bg-transparent
            text-white
            text-left
            text-base
            font-normal
            leading-7
            px-7 py-6
            rounded-xl
            border-none
            outline-none
            placeholder-white"
          aria-label="Mensaje"
        />
        {errors.message && (
          <span
            className="
              absolute
              -bottom-6
              left-0
              font-arial
              font-normal
              text-base
              leading-7
              text-red-400
            "
          >
            {errors.message}
          </span>
        )}
      </div>

      <div className="
        flex
        flex-row
        flex-wrap
        items-end
        gap-5
      ">
        <button
        type="submit"
        disabled={isSubmitting}
        className={`
          bg-white
          h-[48px]
          px-4
          rounded-lg
          text-[#12181D]
          text-[18px]
          max-sm:text-base
          transition
          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}
        `}
      >
        {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
      </button>


        <a
          href="mailto:info@miurahospitality.mx"
          className="
            font-anek
            font-normal
            text-white
            text-[26px]
            leading-5
            hover:underline
          "
        >
          info@miurahospitality.mx
        </a>

        <InstagramButton
          href="https://www.instagram.com/miurahospitality/"
        />

        <img
        className='ml-auto'
        src="/src/assets/images/contact/8888.png"
        alt="Logo Empresa"
        onError={(e) => {
          e.currentTarget.src =
            "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409805/8888_slluqb.png";
        }}
        />

      </div>


    </form>
  );
};
