interface OptionCheckboxProps {
    title: string
    value: boolean
    onValueChange: (value: boolean) => void
}

const OptionCheckbox = ({title: title, value: value, onValueChange: onValueChange}: OptionCheckboxProps) => {
  return (
    <div 
      className="flex items-center gap-x-1">
      <input type="checkbox" 
        className='cursor-pointer size-4 py-2'
        onChange={() => onValueChange(!value)}
      />
      <label 
        className="flex items-center gap-x-1">
        {title}
      </label>
    </div>
  )
}

export default OptionCheckbox