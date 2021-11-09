import React from "react";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";

import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export default function Page5() {
  return (
    <ScrollOverPack id="page5" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h2 key="h2">TIMELINE</h2>
        <p key="p">
          “From Begin To The End.”
        </p>
      </QueueAnim>
      <Timeline mode="alternate">
        <Timeline.Item>
          Thế Anh lần đầu thấy hình của Lan Hương, follow nhưng Lan Hương không
          accept 2021-07-20
        </Timeline.Item>
        <Timeline.Item color="green">
          Lan Hương accept để Thế Anh follow, bắt đầu trò chuyện 2021-07-21
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
        >
          Quá trình trò chuyện vui vẻ giữa Thế Anh và Lan Hương, Play Together
        </Timeline.Item>
        <Timeline.Item color="red">Bắt đầu yêu nhau 2021-08-29</Timeline.Item>
        <Timeline.Item>
          Thế Anh mua trà sữa, lần đầu gặp mặt Lan Hương 2021-10-10
        </Timeline.Item>
        <Timeline.Item>
          Lần đầu hẹn hò, đi chơi ở Hồ Con Rùa 2021-10-16
        </Timeline.Item>
        <Timeline.Item>
          Cùng ăn tối bên bờ sông Thanh Đa 2021-10-20
        </Timeline.Item>
        <Timeline.Item>Cafe với Couple Khánh Tăng 2021-10-29</Timeline.Item>
        <Timeline.Item>
          Thế Anh mua giỏ trái cây qua nhà Lan Hương 2021-10-30
        </Timeline.Item>
        <Timeline.Item>
          Đi cafe Mocking Bird, Waterbus, Bánh kem, Sala 2021-10-31
        </Timeline.Item>
        <Timeline.Item color="red">
          Lan Hương dỗi, đòi chia tay Thế Anh 2021-10-31
        </Timeline.Item>
        <Timeline.Item>
          Trăng Non rooftop, tặng hoa, cơm tấm, XO 2021-11-06
        </Timeline.Item>
        <Timeline.Item>Ăn bún đậu mắm tôm 2021-11-08</Timeline.Item>
        <Timeline.Item>
          Lan Hương mua trà sữa cho Thế Anh 2021-11-09
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
        >
          To be continue
        </Timeline.Item>
      </Timeline>
    </ScrollOverPack>
  );
}
