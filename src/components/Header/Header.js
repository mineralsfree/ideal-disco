import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import {cn} from '@bem-react/classname'

import GitHubLogo from '../../assests/github_logo.png'
import {change,search} from '../../redux/searchSlice';
import './Header.scss';

const HeaderCn = cn('header')
export const Header = ()=>{
  const searchValue = useSelector((state)=> state.search.value);
  const dispatch = useDispatch();
  const doSearch = (e)=>{
    e.preventDefault();
    dispatch(search(searchValue));
  }
  return (<div className={HeaderCn('container')}>
      <img className={HeaderCn('logo')} src={GitHubLogo} alt={'github logo'}/>
      <form className={HeaderCn('form')} onSubmit={(e)=>{doSearch(e)}}>
        <input className={HeaderCn('search')} type='text' value={searchValue} onChange={e=>dispatch(change(e.target.value))}/>
      </form>
  </div>)
}