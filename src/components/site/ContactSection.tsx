import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<"name" | "company" | "email" | "goal", string>>;

const EMAIL = "hello@openways.sg";
const LINKEDIN = "https://www.linkedin.com/in/liadkaikov/";

export function ContactSection() {
  const [values, setValues] = useState({ name: "", company: "", email: "", goal: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof typeof values, boolean>>>({});
  const [sent, setSent] = useState(false);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please add your name.";
    if (!v.company.trim()) e.company = "Please add your company.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please add a valid email.";
    if (v.goal.trim().length < 10) e.goal = "A sentence or two is enough.";
    return e;
  };

  const update = (key: keyof typeof values, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const onBlur = (key: keyof typeof values) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, company: true, email: true, goal: true });
    if (Object.keys(found).length === 0) setSent(true);
  };

  const fieldClass = (key: keyof Errors) =>
    "w-full border-0 border-b bg-transparent px-0 py-3 text-lg text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-primary " +
    (errors[key] && touched[key] ? "border-destructive" : "border-input");

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/50 py-24 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[24rem] -bottom-[26rem] size-[50rem] rounded-full border border-primary/15"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="display text-[2.6rem] leading-[1.05] sm:text-[3.4rem]">
              Let&rsquo;s open the way to your{" "}
              <span className="italic text-primary">next stage of growth.</span>
            </h2>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink">
              If you&rsquo;re exploring a new market, partnership or commercial opportunity
              &mdash; or simply trying to work out the smartest next move &mdash; let&rsquo;s
              talk.
            </p>
            <div className="mt-10 space-y-2 text-base">
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
              </p>
              <p>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            {sent ? (
              <div
                role="status"
                className="border-l-2 border-primary py-6 pl-6"
              >
                <p className="display text-3xl">Thank you &mdash; message received.</p>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
                  We&rsquo;ll come back to you personally, usually within one working day. In the
                  meantime, feel free to write directly to {EMAIL}.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-8">
                <div>
                  <label htmlFor="name" className="eyebrow block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    onBlur={() => onBlur("name")}
                    aria-invalid={Boolean(errors.name && touched.name)}
                    className={fieldClass("name")}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-2 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="eyebrow block">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={values.company}
                    onChange={(e) => update("company", e.target.value)}
                    onBlur={() => onBlur("company")}
                    aria-invalid={Boolean(errors.company && touched.company)}
                    className={fieldClass("company")}
                  />
                  {errors.company && touched.company && (
                    <p className="mt-2 text-sm text-destructive">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="eyebrow block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    onBlur={() => onBlur("email")}
                    aria-invalid={Boolean(errors.email && touched.email)}
                    className={fieldClass("email")}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-2 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="goal" className="eyebrow block">
                    What are you looking to achieve?
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={3}
                    value={values.goal}
                    onChange={(e) => update("goal", e.target.value)}
                    onBlur={() => onBlur("goal")}
                    aria-invalid={Boolean(errors.goal && touched.goal)}
                    className={fieldClass("goal") + " resize-none"}
                  />
                  {errors.goal && touched.goal && (
                    <p className="mt-2 text-sm text-destructive">{errors.goal}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground transition-all duration-300 hover:gap-5"
                >
                  Let&rsquo;s talk
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
