describe('fizzBuzz', function() {
  var fizzbuzz;

  beforEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  it ("can return numbers up to 100", function() {
    var numbers = fizzbuzz.list;
    expect(numbers.length).toEqual(100);
  }
});
