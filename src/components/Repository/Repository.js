import React from 'react'
import {cn} from "@bem-react/classname";
import './Repository.scss'

const RepositoryCn = cn('repository')

export const Repository = props => {
  const {name, id, description, html_url} = props
  return (<div className={RepositoryCn('container')} key={id}>
    <a rel="noreferrer"  target={'_blank'} href={html_url} className={RepositoryCn('name')}>{name}</a>
    <div className={RepositoryCn('description')}>{description}</div>
  </div>)
}