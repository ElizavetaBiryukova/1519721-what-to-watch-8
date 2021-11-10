import {Link} from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { logoutAction } from '../../store/api-actions';
import { State } from '../../types/state';

const mapStateToProps = (state: State) => ({
  authInfo: state.authInfo,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlockLogIn(props: PropsFromRedux): JSX.Element {
  const dispatch = useDispatch();
  const handlerLogoutClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={props.authInfo.avatarUrl} alt={props.authInfo.name} width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to='/' className="user-block__link" onClick={handlerLogoutClick}>{props.authInfo.email}</Link>
      </li>
    </ul>
  );
}

export { UserBlockLogIn };
export default connector(UserBlockLogIn);
