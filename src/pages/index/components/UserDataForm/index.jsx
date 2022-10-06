import { useState } from 'react'
import { Form, Input, Button } from '../../../../components'
import style from './style.module.css'
import { checkDate, checkFullName, editFullName } from './helper'

const UserDataForm = () => {
  const [isCheck, setIsCheck] = useState(false)
  const onValidate = () => setIsCheck(true)

  const commonParams = {
    isCheck:isCheck,
    required: true,
    onChangeValue:() => setIsCheck(false)
  }

  return (
    <Form className={style.container}>
      <div className={style.body}>
        <Input
          label='ФИО'
          type="userName"

          validator={checkFullName}
          normalize={editFullName}

          {...commonParams}
        />
        <Input
          label='Телефон'
          type="phone-number"
          checkState={isCheck}
          required
          onChangeValue={() => setIsCheck(false)}
        />
        <Input
          label='Email'
          type="email"
          isCheck={isCheck}
          required
          onChangeValue={() => setIsCheck(false)}
        />
        <Input
          label='Дата'
          type="date"
          isCheck={isCheck}
          required
          validator={checkDate}
          onChangeValue={() => setIsCheck(false)}
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