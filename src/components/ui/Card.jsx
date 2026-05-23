const Card = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-slate-900/70
        backdrop-blur-lg
        border
        border-slate-800
        rounded-3xl
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:border-slate-700
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card