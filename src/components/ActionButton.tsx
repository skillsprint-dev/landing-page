export default function ActionButton() {
  const href = "https://calendly.com/skillsprint/free-assessment"
  return (
    <a href={href} className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hvr-sweep-to-right dark:bg-gray-700">
      Book a Free Assessment
    </a> 
  )
}
