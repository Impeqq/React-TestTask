import MainLayout from "../components/MainLayout";
import OperatorsList from "../components/operator/OperatorsList";

export default function Home() {
  return (
    <MainLayout title={"Выбор оператора"}>
      <OperatorsList></OperatorsList>
    </MainLayout>
  );
}
