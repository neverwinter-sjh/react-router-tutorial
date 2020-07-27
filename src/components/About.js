import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

const About = () => {
  const { search } = useLocation();
  const query = qs.parse(search, { ignoreQueryPrefix: true });  
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {query.detail !== undefined && <p>detail 값을 {query.detail}(으)로 설정하셨군요.</p>}
    </div>
  )
};

export default About;