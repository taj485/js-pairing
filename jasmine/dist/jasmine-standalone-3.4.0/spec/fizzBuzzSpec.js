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
    expect(numbers[numbers.length-1]).toEqual(100);
  })

  it ("can return fizz when number divides by 3", function() {
    var numbers = fizzbuzz.list();
    expect(numbers[2]).toEqual("fizz");
  })

});
