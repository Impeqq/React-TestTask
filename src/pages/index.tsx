import Index from "../components/MainLayout"
import OperatorsList from "../components/operator/OperatorsList";

import { injectIntl } from "react-intl";
import MainLayout from "../components/MainLayout";

const Home = ({intl, props}) => {
  return (
    <MainLayout props={props} title={intl.formatMessage({id: 'title1'})}>
      <OperatorsList></OperatorsList>
    </MainLayout>
  );
};

export default injectIntl(Home);
