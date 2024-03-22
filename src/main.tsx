import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ConfigProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ConfigProvider>
);
