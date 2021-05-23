import React, {useState} from 'react'
import {cn} from "@bem-react/classname";
import {useDispatch, useSelector} from 'react-redux';
import './ProfilePage.scss'
import {Repository} from "../Repository/Repository";
import ReactPaginate from 'react-paginate';
import {fetch_repos} from "../../redux/searchSlice";
import {State} from "../StateScreen/State";
import {numberShortcutHelper} from "../../helpers";


const ProfileCn = cn('profile')

export const ProfilePage = () => {
  const [state, setState] = useState(1)
  const profile = useSelector((state) => state.search.user);
  const repos = useSelector((state) => state.search.repos);
  const dispatch = useDispatch();
  const handlePageClick = (e) => {
    let selected = e.selected;
    setState(selected + 1)
    dispatch(fetch_repos([profile.login, selected + 1]))
  }
  return (<div className={ProfileCn('container')}>
    {profile && profile.avatar_url ? (<div className={ProfileCn('information')}>
      <img className={ProfileCn('image')} src={profile.avatar_url} alt={'profile'}/>
      <div className={ProfileCn('name')}>{profile.name}</div>
      <a className={ProfileCn('login')} href={profile.html_url}
         rel="noreferrer"
         target={'_blank'}>{profile.login}</a>
      <div className={ProfileCn('network')}>
        <div className={ProfileCn('followers')}/>
        {numberShortcutHelper(profile.followers) + ' followers'}
        <div className={ProfileCn('following')}/>
        {numberShortcutHelper(profile.following) +  ' following'}
      </div>

    </div>) : profile && profile.message === "Not Found" ? <State icon={'user'} text='User not found'/> :
      <State icon={'search'} text='Start with searching a GitHub user'/>}
    {profile && profile.avatar_url && repos && repos.length > 0 ? (<>
        <div className={'repos-container'}>
          <div key={0} className={'repos-count'}>Repositories ({profile.public_repos})</div>
          {repos.map(repo => <Repository {...repo}/>)}
          <div className={'repos-pagination-container'}>
            <div>{(state - 1) * 4 + 1}-{Math.min((state) * 4, profile.public_repos)} of {profile.public_repos} items</div>
            <ReactPaginate
              pageCount={Math.ceil(profile.public_repos / 4)}
              previousLabel={<div className={ProfileCn('prev')}/>}
              nextLabel={<div className={ProfileCn('next')}/>}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={e => handlePageClick(e)}
              containerClassName={ProfileCn('pagination')}
              activeClassName={ProfileCn('active')}
            />
          </div>
        </div>

      </>
    ) : profile && profile.avatar_url && <State icon={'rep'} text='Repository list is empty'/>
    }
  </div>)
}