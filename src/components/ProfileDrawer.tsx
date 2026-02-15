"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    User,
    ClipboardList,
    MapPin,
    Bell,
    Globe,
    Moon,
    Info,
    LogIn,
    LogOut,
    Phone,
    X,
    Instagram,
    Send,
    Facebook,
} from "lucide-react";
import { useRouter } from "next/navigation";
import useLangStore, { Lang } from "@/stores/langStore";
import { useT } from "@/i18n/t";

const Row = ({
    icon,
    label,
    href,
    onClick,
}: {
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
}) => {
    const content = (
        <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition">
            <span className="text-gray-500">{icon}</span>
            <span className="text-sm text-gray-800">{label}</span>
        </div>
    );

    if (href) return <Link href={href}>{content}</Link>;

    return (
        <button type="button" onClick={onClick} className="w-full text-left">
            {content}
        </button>
    );
};

export default function ProfileDrawer() {
    const [open, setOpen] = useState(false);

    // later you’ll replace this with real auth
    const isLoggedIn = false;
    const router = useRouter();

    const t = useT();
    const { lang, setLang } = useLangStore();

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, []);

    const LangButton = ({ code }: { code: Lang }) => (
        <button
            type="button"
            onClick={() => {
                setLang(code);
                router.refresh(); // ✅ re-render server components (ProductPage)
            }}
            className={`px-3 py-2 rounded-md ring-1 text-sm transition ${lang === code
                    ? "bg-lime-400 text-white ring-lime-400"
                    : "bg-white text-gray-700 ring-gray-200 hover:bg-gray-50"
                }`}
        >
            {code.toUpperCase()}
        </button>
    );

    return (
        <>
            {/* Avatar Button */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-10 h-10 rounded-full ring-1 ring-gray-200 bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Open profile menu"
            >
                <User className="w-5 h-5 text-gray-600" />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/30"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 z-50 h-full w-[320px] sm:w-[360px] bg-white shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
                role="dialog"
                aria-modal="true"
            >
                <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-500" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                                {isLoggedIn ? t("common.myAccount") : t("common.guest")}
                            </span>
                            <span className="text-xs text-gray-500">
                                {isLoggedIn ? t("common.welcomeBack") : t("common.signInHint")}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="w-9 h-9 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
                        aria-label={t("common.close")}
                        title={t("common.close")}
                    >
                        <X className="w-4 h-4 text-gray-600" />
                    </button>
                </div>

                <div className="p-4 flex flex-col gap-2">
                    {/* Auth / Account */}
                    {!isLoggedIn ? (
                        <Row
                            icon={<LogIn className="w-4 h-4" />}
                            label={t("common.signInUp")}
                            href="/login"
                        />
                    ) : (
                        <>
                            <Row
                                icon={<User className="w-4 h-4" />}
                                label={t("common.accountDetails")}
                                href="/account"
                            />
                            <Row
                                icon={<ClipboardList className="w-4 h-4" />}
                                label={t("common.myOrders")}
                                href="/orders"
                            />
                            <Row
                                icon={<MapPin className="w-4 h-4" />}
                                label={t("common.myAddresses")}
                                href="/addresses"
                            />
                            <Row
                                icon={<Bell className="w-4 h-4" />}
                                label={t("common.notifications")}
                                href="/notifications"
                            />
                        </>
                    )}

                    <div className="border-t my-2" />

                    {/* Language selector */}
                    <div className="px-3">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{t("common.language")}</span>
                        </div>

                        <div className="mt-2 flex gap-2">
                            <LangButton code="ru" />
                            <LangButton code="uz" />
                            <LangButton code="en" />
                        </div>
                    </div>

                    {/* Theme placeholder (we’ll implement in step #2) */}
                    <Row
                        icon={<Moon className="w-4 h-4" />}
                        label={t("common.theme")}
                        onClick={() => { }}
                    />

                    <Row icon={<Info className="w-4 h-4" />} label={t("common.about")} href="/about" />

                    <div className="border-t my-2" />

                    {/* Support */}
                    <a
                        href="tel:+998781136633"
                        className="rounded-xl bg-gray-50 p-3 flex items-center gap-3 hover:bg-gray-100 transition"
                    >
                        <div className="w-10 h-10 rounded-full bg-white ring-1 ring-gray-200 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500">{t("common.support")}</span>
                            <span className="text-sm font-semibold">+998 78 113 66 33</span>
                        </div>
                    </a>

                    {/* Sign out */}
                    {isLoggedIn && (
                        <Row
                            icon={<LogOut className="w-4 h-4" />}
                            label={t("common.signOut")}
                            onClick={() => { }}
                        />
                    )}

                    {/* Socials */}
                    <div className="mt-3 flex items-center gap-3 justify-center text-gray-500">
                        <a href="#" aria-label="Instagram" className="hover:text-gray-800">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Telegram" className="hover:text-gray-800">
                            <Send className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-gray-800">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}