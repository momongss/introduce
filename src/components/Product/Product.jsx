import React from "react";

import "./Product.css";
import bookmark from "./img/bookmark2.png";
import quicknote from "./img/quicknote.png";

function Product() {
  return (
    <div className="products">
      <article className="item">
        <h2 className="title">new tab & bookmark manager</h2>
        <div className="info">
          <div className="info-title">특징</div>
          <ul className="info-content">
            <li>윈도우 바탕화면처럼 사용하는 북마크 관리기</li>
            <li>크롬의 첫화면을 북마크 관리기로 활용</li>
          </ul>
        </div>
        <div className="link">
          <a
            href="https://github.com/momongss/chromebookmark"
            target="_blank"
            className="github"
          >
            Github
          </a>
          <a
            href="https://chrome.google.com/webstore/detail/new-tab-bookmark-manager/hlggoabjcpdkphbmlgoblempopodkaif?hl=ko"
            target="_blank"
            className="webstore"
          >
            스토어 링크
          </a>
        </div>
        <img className="product-img" src={bookmark} />
      </article>
      <article className="item">
        <h2 className="title">Quick Note</h2>
        <div className="info description">
          <div className="info-title desc">특징</div>
          <ul className="info-content">
            <li>단축키를 눌러 불러오는 노트앱</li>
          </ul>
        </div>
        <div className="link">
          <a
            href="https://github.com/momongss/WebNote"
            target="_blank"
            className="github"
          >
            Github
          </a>
          <a
            href="https://chrome.google.com/webstore/detail/quick-note/ldihmbgbjpdelokhkhhgobjhbjkadifg?hl=ko"
            target="_blank"
            className="webstore"
          >
            스토어 링크
          </a>
        </div>
        <img className="product-img" src={quicknote} />
      </article>
    </div>
  );
}

export default Product;

// 고민할 것. 다른 제품이 추가되면
// 어떻게 할 것인가??
// >> 그냥 2xN 배열을 가져가자.
