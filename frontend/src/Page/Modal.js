import { alignProperty } from '@mui/material/styles/cssUtils';
import { textAlign } from '@mui/system';
import React from 'react';
import '../component/modal.css';
import imgT from './img/trash.png';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
          <text className="InformText">가입이 완료되었습니다!</text>
          <img className="TrashImage" alt="Trash" src={imgT} width="300"/>
            <button className="close" onClick={close}>
              로그인하러가기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;