import { motion } from 'framer-motion'

function Button({
  children,
  className = '',
  size = 'md',
}) {

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex
        items-center
        justify-center
        font-semibold
        rounded-xl
        transition-all
        duration-300
        bg-blue-600
        text-white
        hover:bg-blue-700
        shadow-md
        hover:shadow-lg
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  )
}

export default Button