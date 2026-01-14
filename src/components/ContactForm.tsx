import React, { useState } from 'react';
import { InstagramButton } from './ui/isntagram-button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

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

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="    w-[956px]
    mx-auto
    max-md:w-[800px]
    max-sm:w-full
    px-4">
      <div className="flex gap-[30px] mb-[25px] max-sm:flex-col max-sm:gap-[15px]">
        <div className="w-[463px] h-[71px] relative rounded-xl border-2 border-solid border-[rgba(217,217,217,0.74)] max-md:w-[385px] max-md:h-[60px] max-sm:w-80 max-sm:h-[50px]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nombre"
            className="w-full h-full bg-transparent text-white text-left text-[26px] font-normal leading-7 px-7 py-6 rounded-xl border-none outline-none placeholder-white max-md:text-[22px] max-md:py-[18px] max-sm:text-base max-sm:py-[15px]"
            aria-label="Nombre"
          />
          {errors.name && (
            <span
              className="
                absolute
                -bottom-6
                left-0
                font-anek
                font-normal
                text-[26px]
                leading-7
                text-red-400
              "
            >
              {errors.name}
            </span>
          )}
        </div>

        <div className="w-[463px] h-[71px] relative rounded-xl border-2 border-solid border-[rgba(217,217,217,0.74)] max-md:w-[385px] max-md:h-[60px] max-sm:w-80 max-sm:h-[50px]">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Correo"
            className="w-full h-full bg-transparent text-white text-left text-[26px] font-normal leading-7 px-7 py-6 rounded-xl border-none outline-none placeholder-white max-md:text-[22px] max-md:py-[18px] max-sm:text-base max-sm:py-[15px]"
            aria-label="Correo electrónico"
          />
          {errors.email && (
            <span
              className="
                absolute
                -bottom-6
                left-0
                font-anek
                font-normal
                text-[26px]
                leading-7
                text-red-400
              "
            >
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="w-[956px] h-[173px] relative rounded-xl border-2 border-solid border-[rgba(217,217,217,0.74)] max-md:w-[800px] max-md:h-[140px] max-sm:w-80 max-sm:h-[100px] mb-8">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Mensaje"
          className="w-full h-full bg-transparent text-white text-left text-[26px] font-normal leading-7 px-7 py-6 rounded-xl border-none outline-none placeholder-white resize-none max-md:text-[22px] max-md:py-[18px] max-sm:text-base max-sm:py-[15px]"
          aria-label="Mensaje"
        />
        {errors.message && (
          <span
            className="
              absolute
              -bottom-6
              left-0
              font-anek
              font-normal
              text-[26px]
              leading-7
              text-red-400
            "
          >
            {errors.message}
          </span>
        )}
      </div>

      <div className="flex items-center gap-8 max-sm:flex-col max-sm:items-start">
        <button
          type="submit"
          className="
            bg-white
            text-[#12181D]
            px-8
            py-3
            rounded-lg
            font-anek
            font-normal
            text-[26px]
            leading-7
            hover:bg-gray-100
            transition-colors
          "
        >
          Enviar Mensaje
        </button>

        <a
          href="mailto:contacto@miura.mx"
          className="
            font-anek
            font-normal
            text-white
            text-[26px]
            leading-7
            hover:underline
            whitespace-nowrap
            max-md:text-[22px]
            max-sm:text-base
          "
        >
          contacto@miura.mx
        </a>

        <img
        src="/src/assets/images/contact/8888.png"
        alt="Logo Empresa"
        onError={(e) => {
          e.currentTarget.src =
            "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409805/8888_slluqb.png";
        }}
        />

          <div className="ml-auto">
            <InstagramButton href="https://www.instagram.com/miurahospitality/" />
          </div>

      </div>


    </form>
  );
};
