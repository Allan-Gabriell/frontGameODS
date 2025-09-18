import type { ReactNode } from "react";
import { AppBackground } from "./style";

interface AppBarProps {
  children: ReactNode;
}

const AppBar: React.FC<AppBarProps> = ({ children }) => {
  return (
    <AppBackground>
      {children}
    </AppBackground>
  );
};

export default AppBar;