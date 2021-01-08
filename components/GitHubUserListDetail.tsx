import Link from 'next/link';
import * as React from 'react';
import { User } from '../interfaces/User';
import './GitHubUserListDetail.scoped.scss';

type Props = {
  item: User;
};

const GitHubUserListDetail = ({ item: user }: Props) => (
  <div className="mg-20 flex-col">
    <h1 className="mgb-20 align-center">
      <Link href="/users">
        <img className="icon mgr-20" src="/icons/back-arrow.svg" alt="" />
      </Link>
      Detail for {user.login}
    </h1>
    <div className="flex-row">
      <div className="avatar-container mgr-20">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="flex-col mg-20">
        <h6># {user.id}</h6>
        <h3>
          Username: <strong>{user.login}</strong>
        </h3>
        <h4>
          Followings: <b>{user.following}</b>
        </h4>
        <h4>
          Followers: <b>{user.followers}</b>
        </h4>
      </div>
    </div>
  </div>
);

export default GitHubUserListDetail;
