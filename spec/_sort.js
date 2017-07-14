describe('Your sorting algo', () => {


  /*it('should be truthy', () => {
    expect(true).toBeTruthy();
  });*/

  it( 'should be a function', () => {
    expect(bubbleSort instanceof Function).toBe(true);
  });

  it('should return array ', () => {
    let ex1 = [1,9,8,7,3,4];
    let item  = bubbleSort(ex1);
    expect(item instanceof Array).toBe(true);
  });

it('should return empty array if there is no parametre ', () => {
    let ex1 = []
    let item  = bubbleSort(ex1)
    expect(item).toEqual([]);
  });

it('should sort ', () => {
    let ex1 = [1,9,8,7,3,4];
    let ex2 = [23,12,0,6,78,102,11]
    let item1 = bubbleSort(ex1);
    let item2 = bubbleSort(ex2);
    expect(item1).toEqual([1,3,4,7,8,9]);
    expect(item2).toEqual([0,6,11,12,23,78,102]);
    
  });

it('should sort strings ', () => {
    let ex1 = ["b","a","f","d","e","c"];
    let ex2 = ["pegah","saba","bill","kumiko","mike"]
    let item1 = bubbleSort(ex1);
    let item2 = bubbleSort(ex2);
    expect(item1).toEqual(["a","b","c","d","e","f"]);
    expect(item2).toEqual(["bill","kumiko","mike","pegah","saba"]);
    
  });

});