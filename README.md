# zetoff-three

Wrapper of Three.js and other useful libraries

[![Travis build status](http://img.shields.io/travis/zetoff/zetoff-three.svg?style=flat)](https://travis-ci.org/zetoff/zetoff-three)
[![Code Climate](https://codeclimate.com/github/zetoff/zetoff-three/badges/gpa.svg)](https://codeclimate.com/github/zetoff/zetoff-three)
[![Test Coverage](https://codeclimate.com/github/zetoff/zetoff-three/badges/coverage.svg)](https://codeclimate.com/github/zetoff/zetoff-three)
[![Dependency Status](https://david-dm.org/zetoff/zetoff-three.svg)](https://david-dm.org/zetoff/zetoff-three)
[![devDependency Status](https://david-dm.org/zetoff/zetoff-three/dev-status.svg)](https://david-dm.org/zetoff/zetoff-three#info=devDependencies)

## Install

`npm install --save zetoff-three`

## How to use it?
```
import THREE from 'zetoff-three';
import {ThreeBSP} from 'zetoff-three';
```


## Includes:

- Three.js

**Loader Libraries**
 - STLLoader
 - OBJLoader
 - BinaryLoader
 - SVGLoader
 - 3MFLoader

**Export Libraries**
 - STLBinaryExporter
 - STLExporter
 - OBJExporter

**Control Libraries**
 - OrbitControls
 - MouseControls
 - TrackballControls

**Geometry**
 - NURBSCurve
 - NURBSSurface
 - NURBSUtils
 - ThreeCSG



## Contributors

You need to install three `npm install three` as a peer depency.
I need to investigate how to better integrate with the three package in terms of
dependencies. See: https://github.com/Zetoff/zetoff-three/issues/12
Another issue is that it only works when the THREE installed in the project is the same version as the one installed in this repo when the project is built. See: https://github.com/Zetoff/zetoff-three/issues/14
