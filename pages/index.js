import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { DatePicker } from 'antd';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <div>
        <DatePicker />
        <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
          <a>here</a>
        </Link>
        <Title>My page</Title>
        <img src="/static/img/avatar.png" />
        Hello World {this.props.userAgent}
      </div>
    );
  }
}
