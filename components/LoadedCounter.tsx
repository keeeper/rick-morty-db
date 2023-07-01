
const LoadedCounter = ({current, total}) => {
  return (
    <div 
      className="
        fixed 
        bottom-2 
        right-2 
        sm:bottom-8 
        sm:right-8 
        mr-100 
        p-4 
        bg-header/50 
        text-white 
        text-xs 
        rounded-lg
      ">
        {`${current} out of ${total}`}
      </div>
  )
}

export default LoadedCounter;
  