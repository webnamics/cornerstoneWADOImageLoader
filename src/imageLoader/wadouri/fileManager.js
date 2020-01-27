let files = [];

function add(file) {
  const fileIndex = files.push(file);

  return `dicomfile:${fileIndex - 1}`;
}

function addBuffer(file) {
  const fileIndex = files.push(file);

  return `dicombuffer:${fileIndex - 1}`;
}

function get(index) {
  return files[index];
}

function remove(index) {
  files[index] = undefined;
}

function purge() {
  files = [];
}

export default {
  add,
  addBuffer,
  get,
  remove,
  purge,
};
