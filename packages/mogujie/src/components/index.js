import Col from "vant/lib/col";
import Row from "vant/lib/row";
import { Layout, Header, Aside, Main, Footer } from "./layout";
import "vant/lib/col/index.css";
import "vant/lib/row/index.css";

const components = {
  CRow: Row,
  CCol: Col,
  Layout,
  Aside,
  Header,
  Main,
  Footer,
};
const install = (app) => {
  Object.keys(components).forEach((key) => {
    // 第三方组件
    if (key === "CRow" || key === "CCol") {
      app.component(key, components[key]);
    } else {
      app.component(components[key].name, components[key]);
    }
  });
};

const Mui = {
  install,
};

export default Mui;
