import { Pie } from "@ant-design/plots";

export default function ChartArticle({ articleStatusQuantity }) {
  console.log(articleStatusQuantity);
  const config = {
    data: [
      { type: "Tất cả bài đăng", value: articleStatusQuantity.totalArticle },
      {
        type: "Bài đang được duyệt",
        value: articleStatusQuantity.pendingArticle,
      },
      { type: "Bài bị từ chối", value: articleStatusQuantity.rejectArticle },
    ],
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
    autoFit: false,
    width: 500,
    height: 500,
    annotations: [
      {
        type: "text",
        style: {
          text: "Biểu đồ\nTrạng thái\nBài đăng",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 30,
          fontStyle: "bold",
        },
      },
    ],
  };
  return (
    <>
      <h2>Trạng thái bài đăng</h2>
      <Pie {...config} />
    </>
  );
}
