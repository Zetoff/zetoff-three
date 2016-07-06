import THREE from '../../src/zetoff-three';

describe('THREE', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(THREE, 'greet');
      THREE.greet();
    });

    it('should have been run once', () => {
      expect(THREE.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(THREE.greet).to.have.always.returned('hello');
    });
  });
});
