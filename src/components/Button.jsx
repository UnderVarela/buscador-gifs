function Button ({ onMyClick, children }) {
  return (
    <button
      onClick={() => onMyClick()}
    >{children}
    </button>
  )
}
export default Button
