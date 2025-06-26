'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function PhoneButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating call button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center w-16 h-16 bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Contact options"
            >
                <Phone size={24} />
            </button>

            {/* Dropdown menu */}
            {open && (
                <div className="absolute bottom-20 right-0 flex flex-col gap-2 animate-fadeIn">
                    <a
                        href="tel:+79998189636"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200"
                    >
                        <Phone size={18} />
                        <span className="text-sm font-semibold">Call</span>
                    </a>

                    <a
                        href="https://wa.me/79998189636"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200"
                    >
                        <FaWhatsapp size={18} />
                        <span className="text-sm font-semibold">WhatsApp</span>
                    </a>

                    <a
                        href="https://t.me/+79998189636"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200"
                    >
                        <FaTelegramPlane size={18} />
                        <span className="text-sm font-semibold">Telegram</span>
                    </a>
                </div>
            )}
        </div>
    );
}
