
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 20000,
    years: 10,
    rate: 3
  };
  expect(calculateMonthlyPayment(values)).toEqual('193.12')
});


it(" should give you handle high interest rates", function(){
  const values = {
    amount: 1000,
    years: 50,
    rate: 78
  };
  expect(calculateMonthlyPayment(values)).toEqual('65.00')

})
/// etc
