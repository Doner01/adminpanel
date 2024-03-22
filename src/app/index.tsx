import { FC } from "react";
import AppRouter from "./appRouters";
import AuthRouter from "./authRouters";

const App: FC = () => {
    const isLogging: boolean = true;
    return isLogging ? <AppRouter /> : <AuthRouter />;
};

export default App;
