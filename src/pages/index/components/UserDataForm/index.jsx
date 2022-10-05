import { useState } from 'react'
import { Form, Input, Button } from '../../../../components'
import style from './style.module.css'

const UserDataForm = () => {
  const [isCheck, setIsCheck] = useState(false)
  
  const onValidate = () => setIsCheck(true)

  return (
    <Form className={style.container}>
      <div className={style.body}>
        <Input label='ФИО' type="userName" isCheck={isCheck}/>
        <Input label='Телефон' type="phone-number" isCheck={isCheck}/>
        <Input label='Email' type="email" isCheck={isCheck}/>
        <Input label='Дата' type="date-custome" isCheck={isCheck}/>
      </div>
      <Button name='Продолжить' onClick={onValidate}/>
    </Form>
  )
}

export default UserDataForm