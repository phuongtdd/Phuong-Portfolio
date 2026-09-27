export default function SectionHeading({ index, label, title, children }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-heading__text">
        <span className="eyebrow">
          {String(index).padStart(2, '0')} — {label}
        </span>
        <h2 className="section-title">{title}</h2>
      </div>
      {children && <p className="section-heading__intro">{children}</p>}
    </div>
  )
}
