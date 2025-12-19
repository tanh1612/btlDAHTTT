import { Layout } from "antd";

const { Header } = Layout;


export default function HeaderAdmin(){
    const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#a19191",
  };
    return <>
        <Header style={headerStyle}></Header>
    </>
}