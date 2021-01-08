import { User } from '../../interfaces/User';
import AppLayout from '../../layouts/AppLayout';
import GitHubUserListDetail from '../../components/GitHubUserListDetail';
import { GitHubUserService } from '../../services/github-user.service';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import './[username].scoped.scss';

const UserDetail = () => {
  const router = useRouter(); // To get route query
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (router?.query.username) {
      GitHubUserService.find(router.query.username).then((res) => {
        setUser(res.data);
      });
    }
  }, [router]); // Re-run this effect if router changed

  return <AppLayout title={user ? user.login : 'User Detail'}>{user && <GitHubUserListDetail item={user} />}</AppLayout>;
};

export default UserDetail;
