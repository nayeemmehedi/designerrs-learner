const arrayChunks = (array, chunkSize) => {
  let chunks = [];
  for (let index = 0; index < array.length; index += chunkSize)
    chunks.push(array.slice(index, index + chunkSize));
  return chunks;
};

export default arrayChunks;
