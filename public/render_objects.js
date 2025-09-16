import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadStopModel() {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      "https://cdn.glitch.global/16da4edb-53fe-4801-9575-2b429ea86330/bus_sign.glb?v=1731525543241",
      function (gltf) {
        const model = gltf.scene;
        model.rotation.x = Math.PI / 2;
        resolve(model);
      },
      undefined,
      reject
    );
  });
}
