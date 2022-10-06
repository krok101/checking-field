import { useState } from 'react'
import { Form, Input, Button } from '../../../../components'
import style from './style.module.css'
import { checkDate, checkFullName, editFullName } from './helper'

const UserDataForm = () => {
  const [isCheck, setIsCheck] = useState(false)
  const onValidate = () => setIsCheck(true)

  return (
    <Form className={style.container}>
      <div className={style.body}>
        <Input
          label='ФИО'
          type="userName"
          checkState={{isCheck, setIsCheck}}
          required
          validator={checkFullName}
          normalize={editFullName}
        />
        <Input
          label='Телефон'
          type="phone-number"
          checkState={{isCheck, setIsCheck}}
          required
        />
        <Input
          label='Email'
          type="email"
          checkState={{isCheck, setIsCheck}}
          required
        />
        <Input
          label='Дата'
          type="date"
          checkState={{isCheck, setIsCheck}}
          required
          validator={checkDate}
        />
      </div>
      <Button
        name='Продолжить'
        onClick={onValidate}
      />
    </Form>
  )
}

export default UserDataForm