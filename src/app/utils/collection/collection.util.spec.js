import collection from 'utils/collection/collection.util';

describe('Collection util test', () => {
  it('Should has functions', () => {
    expect(collection.addItem).toBeFunction();
    expect(collection.updateItem).toBeFunction();
    expect(collection.removeItem).toBeFunction();
  });

  it('Function addItem should add item into array', () => {
    let arr = [];
    arr = collection.addItem(arr, 'Test');

    expect(arr.length).toBe(1);
    expect(arr).toContain('Test');
  });

  it('Function removeItem should remove item from array', () => {
    let arr = ['Test'];
    arr = collection.removeItem(arr, 'Test');

    expect(arr.length).toBe(0);
    expect(arr).not.toContain('Test');
  });

  it('Function updateItem should update item in array', () => {
    const item = { id: 1, text: 'Test' };
    let arr = [item];

    item.text = 'Test1';

    arr = collection.updateItem(arr, item);

    expect(arr.length).toBe(1);
    expect(arr).toContain(item);
  });
});
