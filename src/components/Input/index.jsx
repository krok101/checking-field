import { useEffect, useRef, useState } from 'react'
import style from './style.module.css'
import { editDate, editPhoneNumber, checkPhoneNumber, checkEmail } from './helper'

const Input = ({ label, type, className: cn, checkState, validator, required, normalize }) => {
  const [value, setValue] = useState('')
  const [inFocus , setInFocus] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const inputRef = useRef(null)
  const { isCheck, setIsCheck } = checkState

  const getLabelClass = () => {
    let className = style.label
    if (inFocus || inputRef.current?.value) 
      className += ' ' + style.labelFocus
    return className
  }

  useEffect(() => {
    if (!isCheck) return
    const { value } = inputRef.current

    if (required && !inputRef.current.value) setIsValid(false)

    if (validator) {
      // не стандартная валидация
      setIsValid(validator(value))
    } else {
      // стандартная валидация по типу данных
      switch(type) {
        case 'phone-number': return setIsValid(checkPhoneNumber(value))
        case 'email': return setIsValid(checkEmail(value))
        default: setValue(value)
      }
    }
  }, )

  useEffect(() => {
    // сбрасываем валидацию
    if (setIsCheck) setIsCheck(false)
  }, [value])

  const onChange = (e) => {
    const {value} = e.target
    if (!isValid) setIsValid(true) // если поле обновилось сбрасываем не валидность
    // нормализация
    if (normalize) return setValue(normalize(value))
    switch(type) {
      case 'phone-number': return editPhoneNumber(value, setValue)
      case 'date': return editDate(value, setValue)
      default: setValue(value)
    }
  }

  return (
    <div className={`${style.container} ${isValid ? '': style.error} ${cn ?? ''}`}>
      <label className={getLabelClass()}>{label}{required ? '*' : null}</label>
      <input ref={inputRef} className={style.input}
        value={value}
        onChange={onChange}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
      ></input>
    </div>
  )
}

export default Input