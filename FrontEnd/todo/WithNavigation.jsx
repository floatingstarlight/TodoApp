import { useNavigate } from "react-router-dom";

//We create a separate functional component so that 
//we can decorate any component that needs navigation!
function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

export default withNavigation