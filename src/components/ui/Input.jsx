const Input = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-slate-300">
          {label}
        </label>
      )}

      <input
        className={`
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          px-4
          py-3
          text-white
          outline-none
          focus:border-blue-500
          transition-all
          duration-300
          ${className}
        `}
        {...props}
      />
    </div>
  )
}

export default Input