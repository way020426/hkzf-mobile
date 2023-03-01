import React from "react";

import SearchHeader from "../../components/SearchHeader";
import { Flex } from "antd-mobile-v2";
// import Filter from "./components/Filter";

import styles from "./index.module.css";
// 获取当前定位城市信息
const { label } = JSON.parse(localStorage.getItem("hkzf_city"));

export default class HouseList extends React.Component {
  render() {
    return (
      <div>
        <Flex className={styles.header}>
          <i
            className="iconfont icon-back"
            onClick={() => this.props.history.go(-1)}
          ></i>
          <SearchHeader cityName={label} className={styles.searchHeader} />
        </Flex>
        {/* 条件筛选 */}
        {/* <Filter /> */}
      </div>
    );
  }
}
