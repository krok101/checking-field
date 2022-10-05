import { useEffect, useRef, useState } from 'react'
import style from './style.module.css'

const Input = ({ label, type, className: cn, isCheck, validator }) => {
  const [inFocus , setInFocus] = useState(false)
  const [isValid, setIsValis] = useState(true)
  const inputRef = useRef(null)

  const getLabelClass = () => {
    let className = style.label

    if (inFocus || inputRef.current?.value) 
      className += ' ' + style.labelFocus

    return className
  }

  useEffect(() => {
    if (!isCheck) return
    if (validator) {
      console.log('кастомная валидация')
    } else {
      console.log('валидация по типу данных')
    }
  })

  return (
    <div className={`${style.container} ${isValid ? '': style.error}`}>
      <label className={`${style.label} ${inFocus || inputRef.current?.value ? style.labelFocus : ''}`}>{label}</label>
      <input ref={inputRef} className={style.input}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
      ></input>
    </div>
  )
}

export default Input