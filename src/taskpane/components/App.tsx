import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import Main from "../plugin/Main";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Main></Main>
    </div>
  );
};

export default App;
