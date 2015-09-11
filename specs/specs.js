describe('findAndReplace', function() {
  it('prompts user if entered an empty string', function() {
    expect(findAndReplace("")).to.eq("Please enter a sentence.");
  });
});
