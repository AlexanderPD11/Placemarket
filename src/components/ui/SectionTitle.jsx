const SectionTitle = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-black text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-2 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle