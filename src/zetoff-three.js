import THREE from 'three';

//Loader Libraries
import STLLoader from './extras/loaders/STLLoader';
import OBJLoader from './extras/loaders/OBJLoader';
import BinaryLoader from './extras/loaders/BinaryLoader';
import SVGLoader from './extras/loaders/SVGLoader';
import ThreeMFLoader from './extras/loaders/3MFLoader';

//Export Libraries
//TODO: test these Libraries
import STLBinaryExporter from './extras/exporters/STLBinaryExporter';
import STLExporter from './extras/exporters/STLExporter';
import OBJExporter from './extras/exporters/OBJExporter';

//Control Libraries
import OrbitControls from './extras/controls/OrbitControls';
import MouseControls from './extras/controls/MouseControls';
import TrackballControls from './extras/controls/TrackballControls';


//Geometry
import NURBSCurve from './extras/geometry/curves/NURBSCurve';
import NURBSSurface from './extras/geometry/curves/NURBSSurface';
import NURBSUtils from './extras/geometry/curves/NURBSUtils';
import ThreeBSP from './extras/geometry/modifiers/ThreeCSG';

//math
import './math';

//TODO: Add PostProcessing

//TODO: Add Shaders

THREE.STLLoader = STLLoader;
THREE.OBJLoader = OBJLoader;
THREE.BinaryLoader = BinaryLoader;
THREE.SVGLoader = SVGLoader;
THREE.ThreeMFLoader = ThreeMFLoader;

THREE.STLBinaryExporter = STLBinaryExporter;
THREE.STLExporter = STLExporter;
THREE.OBJExporter = OBJExporter;

THREE.OrbitControls = OrbitControls;
THREE.MouseControls = MouseControls;
THREE.TrackballControls = TrackballControls;

THREE.NURBSCurve = NURBSCurve;
THREE.NURBSSurface = NURBSSurface;
THREE.NURBSUtils = NURBSUtils;
// FIXME ThreeBSP should be exported as THREE.BSP?

//Export local THREE
export default THREE;

//Export others
export { ThreeBSP };
