import type { NextPage } from "next";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  return <Counter description="My Counter" defaultCount={0} />;
};

export default Home;
