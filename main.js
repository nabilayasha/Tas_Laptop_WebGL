var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor (0x111111, 1);
renderer.setSize(innerWidth, innerHeight);

cam.position.y = 0.5;
cam.position.z = 3;

document.body.appendChild(renderer.domElement);

var directionalLight = new THREE.AmbientLight({color: 0xffffff, intensity:1000});
directionalLight.position.set(50, 50, 50);
scene.add(directionalLight);

const url = '/public/tas.gltf';
let tas;
let gltfLoader = new THREE.GLTFLoader().load(url, function(result) {
    tas = result.scene;
    scene.add(tas);
  });

  let tas2;
  let gltfLoader2 = new THREE.GLTFLoader().load(url, function(result) {
    tas2 = result.scene;
    tas2.position.x = -3.5;
    tas2.position.z = -3;
    scene.add(tas2);
  });

  
  let tas3;
  let gltfLoader3 = new THREE.GLTFLoader().load(url, function(result) {
    tas3 = result.scene;
    tas3.position.x = 3.5;
    tas3.position.z = -3;
    scene.add(tas3);
  });
  

function drawScene() {
    if (tas2){
        tas2.rotation.y +=0.01;
        tas2.rotation.z +=0.01;
    }

    if (tas3) {
        tas3.rotation.y += 0.01;
    }
    renderer.render(scene, cam);
    requestAnimationFrame(drawScene);
}

drawScene();