describe('fizzBuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  it ("can return an array 100 long", function() {
    var numbers = fizzbuzz.list();
    expect(numbers.length).toEqual(100);
  })

  it ("can return numbers up to 100", function() {
    var numbers = fizzbuzz.list();
    expect(numbers[97]).toEqual(98);
  })

  it ("can return fizz when number divides by 3", function() {
    var numbers = fizzbuzz.list();
    expect(numbers[2]).toEqual("fizz");
  })

  it ("can return buzz when number is divisable by 5", function() {
    var numbers = fizzbuzz.list();
    expect(numbers[4]).toEqual("buzz");
  })

  it ("can return fizzbuzz when number is divisable by 3 and 5,", function() {
    var numbers = fizzbuzz.list();
    expect(numbers[14]).toEqual("fizzBuzz");
  })

});
