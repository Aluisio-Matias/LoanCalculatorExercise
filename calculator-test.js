describe('calculate the monthly rate', () => {
  it('should calculate the monthly rate correctly', () => {
    const testValues = {
      amount: 100000,
      years: 15,
      rate: 5.5
    };
    expect(calculateMonthlyPayment(testValues)).toEqual('817.08');
  });
});


describe('return a result with 2 decimals', () => {
  it("should return a result with 2 decimal places", () => {
    const testValues = {
      amount: 100558,
      years: 15,
      rate: 5.5
    };
    expect(calculateMonthlyPayment(testValues)).toEqual('821.64');
  });
});

describe('testing very high interest rates', () => {
  it("should be able to handle very high interest rates", () => {
  const testValues = {
    amount: 100000,
    years: 30,
    rate: 99
  };
    expect(calculateMonthlyPayment(testValues)).toEqual('8250.00');
  });
});

describe('testing for very large loan amounts', () => {
  it('should be able to handle very large amounts', () => {
    const testValues = {
      amount: 1000000000,
      years: 50,
      rate: 5
    };
    expect(calculateMonthlyPayment(testValues)).toEqual('4541387.69');
  });
});
