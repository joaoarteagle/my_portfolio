import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css"
import { useTranslation } from "../../../hooks/useTranslation";
import ScrollReveal from "../../ScrollReveal";
import { EMAILJS_CONFIG } from "../../../config/emailjs.config";

export default function ContactSection({id}: {id: string}){
    const t = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!EMAILJS_CONFIG.PUBLIC_KEY) {
            console.warn("EmailJS PUBLIC_KEY is not set. Contact form will not work.");
            return;
        }

        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSubmitted(false);

        if (!form.current) return;

        if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
            setLoading(false);
            setError(t.contact.configErrorMessage);
            return;
        }

        const formData = new FormData(form.current);
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const name = formData.get("name") as string;

        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    to_email: email,
                    from_email: "jpauloandrade.dev@gmail.com",
                    user_name: name,
                    user_email: email,
                    user_phone: phone,
                    message: `${t.contact.hiringMessage}\n\n${t.contact.phonePlaceholder}: ${phone}`
                }
            );

            setSubmitted(true);
            if (form.current) {
                form.current.reset();
            }
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error("Erro ao enviar email:", err);
            setError(t.contact.errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return(
        <section id={id} className={styles.contactSection}>
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
                <div className={styles.contactContainer}>
                    <h1 className={styles.contactTitle}>{t.contact.title}</h1>
                    <p className={styles.contactDescription}>
                        {t.contact.description}
                    </p>
                    
                    <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <input 
                                type="text" 
                                name="name"
                                placeholder={t.contact.namePlaceholder}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input 
                                type="email" 
                                name="email"
                                placeholder={t.contact.emailPlaceholder}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input 
                                type="tel" 
                                name="phone"
                                placeholder={t.contact.phonePlaceholder}
                                required
                                className={styles.input}
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className={styles.submitButton}
                        >
                            {loading ? t.contact.sending : t.contact.sendButton}
                        </button>

                        {submitted && (
                            <div className={styles.successMessage}>
                                {t.contact.successMessage}
                            </div>
                        )}

                        {error && (
                            <div className={styles.errorMessage}>
                                {error}
                            </div>
                        )}
                    </form>

                    <div className={styles.contactInfo}>
                        <p>{t.contact.contactInfoText}</p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.linkedin.com/in/joaoandrade2606" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/joaoarteagle" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}