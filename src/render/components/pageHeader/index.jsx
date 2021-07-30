import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MinusOutlined, CloseOutlined, BlockOutlined, BorderOutlined } from '@ant-design/icons'
import nativeEvent from '@/utils/nativeEvent';
import style from './style.module.scss';

function LoginHeader({ history }) {
  const [isWinMax, setIsWinMax] = useState(false);

  const handleClickWinCtrl = (event) => {
    if(event === 'maxWin'){
      setIsWinMax(!isWinMax);
    }
    nativeEvent.ctrlWin(event);
  }
  return (
    <div className={style.loginHeader}>
      <div className={style.bd} >
        <div className={style.rightContent}>
          <div className={style.winControl}>
            <span title="最小化" onClick={() =>{handleClickWinCtrl('minWin')}} className={style.ctrlBtn} ><MinusOutlined /></span>
            <span title="最大化" onClick={() =>{handleClickWinCtrl('maxWin')}} className={style.ctrlBtn} >
              {isWinMax?(<BlockOutlined />):(<BorderOutlined />)}
            </span>
            <span title="关闭" onClick={() =>{handleClickWinCtrl('closeWin')}} className={style.ctrlBtn} ><CloseOutlined /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginHeader.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LoginHeader;
