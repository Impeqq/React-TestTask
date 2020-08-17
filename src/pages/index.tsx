import MainLayout from "../components/MainLayout";
import OperatorsList from "../components/OperatorsList";

export default function Home() {
  return (
    <MainLayout title={"Выбор оператора"}>
      <OperatorsList></OperatorsList>
    </MainLayout>
  );
}
