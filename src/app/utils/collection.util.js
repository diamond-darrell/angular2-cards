function getIndex(collection, item) {
  let index = collection.indexOf(item);
  
  if (-1 === index) {
    const itemById = collection.filter(({ id } = {}) => id === item.id);

    if (itemById) {
      index = collection.indexOf(itemById);
    }
  }

  return index;
}

export function addItem(collection, item) {
  return [...collection, item];
}

export function removeItem(collection, item) {
  const itemIndex = getIndex(collection, item);

  if (-1 !== itemIndex) {
    return [
      ...collection.slice(0, itemIndex),
      ...collection.slice(itemIndex + 1),
    ];
  }

  return collection;
}

export function updateItem(collection, item) {
  const itemIndex = getIndex(collection, item);

  if (-1 !== itemIndex) {
    return [
      ...collection.slice(0, itemIndex),
      item,
      ...collection.slice(itemIndex + 1),
    ];
  }

  return collection;
}

export default {
  addItem,
  removeItem,
  updateItem,
};
