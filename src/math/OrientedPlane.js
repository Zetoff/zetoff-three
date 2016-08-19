/**
 * Represents an oriented plane. Adds both X and Y axis to the already existing
 * Z axis (plane's normal vector).
 *
 * @class OrientedPlane
 * @extends THREE.Plane
 */
THREE.OrientedPlane = class OrientedPlane extends THREE.Plane {

  constructor(constant, normal, xAxis = undefined, yAxis = undefined) {
    super(constant, normal);
    this.initializeAxis(xAxis, yAxis);
  }

  /**
   * @inheritDoc
   */
  clone() {
    return super.clone().initializeAxis(this._xAxis, this._yAxis);
  }

  /**
   * @inheritDoc
   */
  copy(plane) {
    return super.copy(plane).initializeAxis(plane._xAxis, plane._yAxis);
  }

  /**
   * Initialize both xAxis and yAxis.
   *
   * @param {THREE.Vector3} xAxis
   *  X axis
   * @param {THREE.Vector3} yAxis
   *  Y axis
   * @return {OrientedPlane}
   *  This oriented plane
   */
  initializeAxis(xAxis = undefined, yAxis = undefined) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    return this;
  }

  /**
   * Checks whether a vector is contained into the plane or not.
   *
   * @param {THREE.Vector3} vector
   *  Vector
   * @return {boolean}
   *  true if vector is in plane, false otherwise
   */
  containsVector(vector) {
    // plane contains vector if it is perpendicular to the normal
    return vector.dot(this.normal) === 0;
  }

  /**
   * Calculate xAxis from the current plane's available data.
   *
   * @return {THREE.Vector3}
   *  X axis vector
   * @private
   */
  _calculateXAxis() {
    if (this._yAxis) {
      return (new THREE.Vector3()).crossVectors(this._yAxis, this.normal);
    } else {
      return this.constructor.calculateXAxis(this.normal);
    }
  }

  /**
   * Calculate yAxis from the current plane's available data.
   *
   * @return {THREE.Vector3}
   *  Y axis vector
   * @private
   */
  _calculateYAxis() {
    if (this._xAxis) {
      return (new THREE.Vector3()).crossVectors(this.normal, this._xAxis);
    } else {
      return this.constructor.calculateYAxis(this.normal);
    }
  }

  /**
   * @member {THREE.Vector3} _xAxis
   * @private
   */

  /**
   * Sets X axis.
   *
   * @param {THREE.Vector3} value
   *  Vector contained in the plane to be its xAxis
   */
  set xAxis(value) {
    if (value === undefined) {
      delete this._xAxis;
    } else if (this.containsVector(value)) {
      delete this._yAxis;
      this._xAxis = value;
    } else {
      throw new TypeError(`'xAxis' must be a THREE.Vector3 ` +
        `perpendicular to the normal.`);
    }
  }

  /**
   * Retrieve X axis.
   *
   * @return {THREE.Vector3}
   *  Plane X axis
   */
  get xAxis() {
    if (this._xAxis) {
      return this._xAxis;
    } else {
      return this._calculateXAxis();
    }
  }

  /**
   * @member {THREE.Vector3} _yAxis
   * @private
   */

  /**
   * Sets X axis.
   *
   * @param {THREE.Vector3} value
   *  Vector contained in the plane to be its xAxis
   */
  set yAxis(value) {
    if (value === undefined) {
      delete this._yAxis;
    } else if (this.containsVector(value)) {
      delete this._xAxis;
      this._yAxis = value;
    } else {
      throw new TypeError(`'yAxis' must be a THREE.Vector3 ` +
        `perpendicular to the normal.`);
    }
  }

  /**
   * Retrieve X axis.
   *
   * @return {THREE.Vector3}
   *  Plane X axis
   */
  get yAxis() {
    if (this._yAxis) {
      return this._yAxis;
    } else {
      return this._calculateYAxis();
    }
  }

  /**
   * Calculates a plane xAxis from its normal.
   *
   * @param {THREE.Vector3} normal
   *  Plane normal
   * @return {THREE.Vector3}
   *  Plane xAxis
   */
  static calculateXAxis(normal) {
    const xAxis = new THREE.Vector3();
    const direction = Math.max(Math.abs(normal.x), Math.abs(normal.y), Math.abs(normal.z));
    switch (direction) {
      case Math.abs(normal.x):
        xAxis.crossVectors(normal, new THREE.Vector3(0, 0, 1));
        break;
      case Math.abs(normal.y):
        xAxis.crossVectors(normal, new THREE.Vector3(1, 0, 0));
        break;
      case Math.abs(normal.z):
        xAxis.crossVectors(normal, new THREE.Vector3(0, 1, 0));
        break;
      default:
        xAxis.crossVectors(normal, new THREE.Vector3(0, 0, 1));
        break;
    }
    return xAxis;
  }

  /**
   * Calculates a plane yAxis from its normal.
   *
   * @param {THREE.Vector3} normal
   *  Plane normal
   * @return {THREE.Vector3}
   *  Plane xAxis
   * @uses calculateXAxis()
   */
  static calculateYAxis(normal) {
    const yAxis = new THREE.Vector3();
    return yAxis.crossVectors(normal, this.calculateXAxis(normal));
  }
};
