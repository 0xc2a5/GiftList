const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const merkleTree = new MerkleTree(niceList);
  const name = "0xc2a5";
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);

  const { data: gift } =
    await axios.post(`${serverUrl}/gift`, { name, proof });

  console.log({ gift });

  // Hardcoded in the server as MERKLE_ROOT
  root = merkleTree.getRoot();
  console.log("MERKLE_ROOT", root);
  console.log("byteLength", Buffer.byteLength(root, "hex")); // 32
}

main();