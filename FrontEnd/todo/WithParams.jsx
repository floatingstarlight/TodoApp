import { useParams } from "react-router-dom";


//pass the param(username) from loginComponent to another component (Welcome component) through url params
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

export default withParams

