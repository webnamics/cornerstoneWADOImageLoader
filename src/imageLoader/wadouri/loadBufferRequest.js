import parseImageId from './parseImageId.js';
import fileManager from './fileManager.js';

function loadBufferRequest(uri) {
  const parsedImageId = parseImageId(uri);
  const fileIndex = parseInt(parsedImageId.url, 10);
  const buffer = fileManager.get(fileIndex);

  return new Promise((resolve, reject) => {
    if (buffer !== null && buffer !== undefined) {
      resolve(buffer);
    } else {
      reject('buffer is null or undefined');
    }
  });
}

export default loadBufferRequest;
