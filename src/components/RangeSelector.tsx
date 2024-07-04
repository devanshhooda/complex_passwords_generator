interface RangeSelectorProps {
  selectedPasswordLength: number
  onLengthChange: (passwordLength: number) => void
}

const RangeSelector = ({
  selectedPasswordLength: selectedPasswordLength, 
  onLengthChange: onLengthChange
}: RangeSelectorProps) => {
  return (
    <div 
      className="flex items-center gap-x-1">
      <input type="range" 
        className='cursor-pointer' 
        min={6}
        max={25}
        onChange={(changeEvent) => onLengthChange(Number(changeEvent.target.value))}
        value={selectedPasswordLength}
      />
      <label>Length: {selectedPasswordLength}</label>
    </div>
  )
}

export default RangeSelector