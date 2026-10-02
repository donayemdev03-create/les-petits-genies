export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, action }) {
  const centered = align === 'center'
  return (
    <div className={`mb-10 flex flex-col gap-6 sm:mb-12 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className={`eyebrow ${light ? '!text-sun-300' : ''}`}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true"><path d="M12 2l2.6 6.1 6.4.5-4.9 4.2 1.5 6.4L12 15.8 6.4 19.2l1.5-6.4L3 8.6l6.4-.5z" fill="currentColor" /></svg>
            {eyebrow}
          </p>
        )}
        <h2 className={`mt-3 text-[1.95rem] leading-tight sm:text-[2.6rem] ${light ? '!text-white' : ''}`}>{title}</h2>
        {text && <p className={`mt-4 text-lg ${light ? 'text-brand-100/90' : 'text-ink-500'}`}>{text}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
