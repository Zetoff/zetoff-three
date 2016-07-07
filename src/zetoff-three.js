//Make THREE a global variable
import './three-global';

//Loader Libraries
import './extras/loaders/STLLoader';
import './extras/loaders/OBJLoader';
import './extras/loaders/BinaryLoader';
import './extras/loaders/SVGLoader';
import './extras/loaders/3MFLoader';

//Export Libraries
//TODO: test these Libraries
import './extras/exporters/STLBinaryExporter';
import './extras/exporters/STLExporter';
import './extras/exporters/OBJExporter';

//Control Libraries
import './extras/controls/OrbitControls';
import './extras/controls/MouseControls';
import './extras/controls/TrackballControls';


//Geometry
import './extras/geometry/curves/NURBSCurve';
import './extras/geometry/curves/NURBSSurface';
import './extras/geometry/curves/NURBSUtils';
import ThreeBSP from './extras/geometry/modifiers/ThreeCSG';


//TODO: Add PostProcessing

//TODO: Add Shaders

//Assign the global THREE to the local THREE
const THREE = global.THREE;
//Delete global THREE
delete global.THREE;

//Export local THREE
export default THREE;

//Export others
export {ThreeBSP};
