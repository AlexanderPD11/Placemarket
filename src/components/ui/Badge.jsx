const Badge = ({
  children,
  color = "blue",
}) => {

  const colors = {
    blue: "bg-blue-500/20 text-blue-400",
    green: "bg-emerald-500/20 text-emerald-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    red: "bg-red-500/20 text-red-400",
  }

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${colors[color]}
      `}
    >
      {children}
    </span>
  )
}

export default Badge