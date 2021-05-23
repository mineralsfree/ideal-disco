import React from 'react'
import {cn} from "@bem-react/classname";
import './State.scss'
import NoRepo from '../../assests/rep.png'
import Search from '../../assests/search.png'
import User from '../../assests/user.png'

const StateCn = cn('state');
let resolveObj = {rep: NoRepo, search: Search, user: User}
export const State = props => {
  const {icon, text} = props;
  return <div className={StateCn('container')}>
    <img src={resolveObj[icon]} alt=""/>
    <div className={StateCn('text')}>{text}</div>
  </div>
}