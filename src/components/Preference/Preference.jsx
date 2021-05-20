import React from "react";

import "./Preference.css";
import Item from "./Item";

function Preference() {
  return (
    <div className="preference">
      <article className="netflix">
        <h3>Netflix</h3>
        <div className="prefer-content">
          <Item
            title="derry girls"
            imgSrc="https://ic.c4assets.com/brands/derry-girls/7354f462-d589-421d-950b-5d6e75692036.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90{&resize}"
            url="https://www.netflix.com/title/80238565"
          ></Item>
          <Item
            title="더 킹: 헨리5세"
            imgSrc="https://i.ytimg.com/vi/iX_9QIw49tM/hqdefault.jpg"
            url="https://www.netflix.com/kr/title/80182016"
          ></Item>
          <Item
            title="저니스 엔드"
            imgSrc="https://i.ytimg.com/vi/qesGVhbY0k0/maxresdefault.jpg"
            url="https://www.netflix.com/kr/title/80226711"
          ></Item>
        </div>
      </article>
      <article className="youtube">
        <h3>Youtube</h3>
        <div className="prefer-content">
          <Item
            title="밀덕영상캐러브"
            imgSrc="//yt3.ggpht.com/ytc/AAUvwnidqY0r0PJxiTVEvL7DpReRelMrD_L81hqApm5lqg=s176-c-k-c0x00ffffff-no-rj-mo"
            url="https://www.youtube.com/user/kaelove1234"
          ></Item>
          <Item
            title="이연"
            imgSrc="//yt3.ggpht.com/ytc/AAUvwnh2voOp6oMmYk4PiO6szZ7rMzx9cap-vZI8dj8yow=s176-c-k-c0x00ffffff-no-rj-mo"
            url="https://www.youtube.com/channel/UCKw7Jsu2cMU_D4yK8VMms1Q"
          ></Item>
          <Item
            title="포프 TV"
            imgSrc="//yt3.ggpht.com/ytc/AAUvwnhSxvBuV1uoyK87Njb3iA5pwx6T-4mNtlHPHrkgUw=s176-c-k-c0x00ffffff-no-rj-mo"
            url="https://www.youtube.com/user/KimPopeTV"
          ></Item>
          <Item
            title="슈카월드"
            imgSrc="//yt3.ggpht.com/ytc/AAUvwniocjP5i1bsH8QNRlHQ_HAoY6EHoTjd_XoMYFVL=s176-c-k-c0x00ffffff-no-rj-mo"
            url="https://www.youtube.com/channel/UCsJ6RuBiTVWRX156FVbeaGg"
          ></Item>
        </div>
      </article>
    </div>
  );
}

export default Preference;
