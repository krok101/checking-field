import style from './style.module.css'

const Form = ({children, className: cn, }) => {
  return (
    <div className={`${style.form} ${cn}`}>
      {children}
    </div>
  )
}

export default Form